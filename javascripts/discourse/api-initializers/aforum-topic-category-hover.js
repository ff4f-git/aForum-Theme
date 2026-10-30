import { apiInitializer } from "discourse/lib/api";

// The color belongs to each topic's category badge, not to the list.
// Only update the desktop latest-topics cards; do not touch mobile.
export default apiInitializer("1.8.0", (api) => {
  const isColor = (value) => {
    if (!value) return false;
    const color = value.trim();
    return (
      (/^#[\\da-f]{3,8}$/i.test(color) ||
        /^rgba?\\(/i.test(color) ||
        /^hsla?\\(/i.test(color)) &&
      color !== "transparent" &&
      !/^rgba?\\(\\s*0\\s*,\\s*0\\s*,\\s*0\\s*,\\s*0\\s*\\)/i.test(color)
    );
  };

  const sync = () => {
    document
      .querySelectorAll(
        ".categories-and-latest .latest-topic-list .latest-topic-list-item"
      )
      .forEach((item) => {
        const badge = item.querySelector(
          ".badge-category__wrapper, .badge-wrapper, .badge-category"
        );
        if (!badge) {
          item.style.removeProperty("--af-topic-category-color");
          return;
        }

        // Discourse exposes its badge color as a CSS custom property.
        // Read the badge itself and its nested colored square (both badge
        // markup variants are used across Discourse versions).
        const candidates = [
          badge,
          badge.querySelector(".badge-category__color"),
          badge.querySelector(".badge-category__name"),
          badge.querySelector(".badge-category"),
        ].filter(Boolean);

        let color = "";
        for (const node of candidates) {
          const style = getComputedStyle(node);
          const variable = style.getPropertyValue("--category-badge-color").trim();
          if (isColor(variable)) {
            color = variable;
            break;
          }
        }

        // Legacy Discourse badge markup uses a solid colored square.
        if (!color) {
          const square = badge.querySelector(
            ".badge-category__color, .badge-category-bg, .badge-category__badge"
          );
          if (square) {
            const background = getComputedStyle(square).backgroundColor;
            if (isColor(background)) color = background;
          }
        }

        if (color) {
          item.style.setProperty("--af-topic-category-color", color);
        } else {
          item.style.removeProperty("--af-topic-category-color");
        }
      });
  };

  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      sync();
    });
  };

  api.onPageChange(schedule);
  const observer = new MutationObserver(schedule);
  const start = () => {
    const outlet = document.querySelector("#main-outlet");
    if (outlet) observer.observe(outlet, { childList: true, subtree: true });
    schedule();
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
});
