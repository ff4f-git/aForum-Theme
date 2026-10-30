import { apiInitializer } from "discourse/lib/api";

// Beta 1.51: Badgefarben auch bei nachtraeglichen Discourse-Updates
// und unmittelbar beim Betreten einer Themenkarte synchronisieren.
export default apiInitializer("1.8.0", (api) => {
  const selector =
    ".categories-and-latest .latest-topic-list .latest-topic-list-item, " +
    "#list-area .topic-list:not(.category-list) > tbody > tr.topic-list-item";
  let scheduled = false;

  function syncRow(row) {
    const badge = row.querySelector(".badge-category__wrapper");
    const color = badge
      ? getComputedStyle(badge).getPropertyValue("--category-badge-color").trim()
      : "";
    const current = row.style.getPropertyValue("--af-topic-hover-color").trim();

    if (color && current !== color) {
      row.style.setProperty("--af-topic-hover-color", color);
    } else if (!color && current) {
      row.style.removeProperty("--af-topic-hover-color");
    }
  }

  function syncAll() {
    scheduled = false;
    document.querySelectorAll(selector).forEach(syncRow);
  }

  function scheduleSync() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(syncAll);
  }

  api.onPageChange(scheduleSync);

  // Capture mouse entry before the hover appearance is painted.
  // Also covers rows whose badge color changed without a DOM mutation.
  function syncHovered(event) {
    const row = event.target.closest?.(selector);
    if (row) syncRow(row);
  }

  const observer = new MutationObserver((mutations) => {
    if (mutations.some((mutation) =>
      mutation.type === "childList" ||
      (mutation.type === "attributes" &&
        mutation.target.closest(".badge-category__wrapper"))
    )) {
      scheduleSync();
    }
  });

  function start() {
    const root = document.querySelector("#main-outlet");
    if (root) {
      observer.observe(root, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style", "class"],
      });
      root.addEventListener("pointerover", syncHovered, true);
      root.addEventListener("focusin", syncHovered, true);
    }
    scheduleSync();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
});
