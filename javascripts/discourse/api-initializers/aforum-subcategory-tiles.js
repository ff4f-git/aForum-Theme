import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.8.0", (api) => {
  // Read the actual category border color, not a duplicated color table.
  // Discourse may replace the category list without a full page reload.
  const syncColors = () => {
    document.querySelectorAll(".category-list tbody tr").forEach((row) => {
      const category = row.querySelector("td.category, .category");
      if (!category) return;
      const color = getComputedStyle(category).borderLeftColor;
      if (!color || color === "transparent" || color === "rgba(0, 0, 0, 0)") return;
      category.style.setProperty("--af-category-icon-color", color);
      row.style.setProperty("--af-category-icon-color", color);
      row.querySelectorAll(".subcategories").forEach((list) => {
        list.style.setProperty("--af-subcategory-accent", color);
      });
    });
  };

  // Beta 1.58: Mobile category cards use a different DOM from desktop rows.
  // Read Discourse's category badge color first, then its native category
  // border. Do not copy the theme's neutral card border as a category color.
  const syncMobileColors = () => {
    document.querySelectorAll(".mobile-view .category-list-item").forEach((card) => {
      const badge = card.querySelector(
        ".category-title-link .badge-category__wrapper, .category-text-title .badge-category__wrapper, .badge-category__wrapper"
      );
      const badgeColor = badge
        ? getComputedStyle(badge).getPropertyValue("--category-badge-color").trim()
        : "";
      const nativeCategory = card.querySelector(".category");
      const nativeColor = nativeCategory
        ? getComputedStyle(nativeCategory).borderLeftColor
        : "";
      const color = badgeColor || (nativeColor && nativeColor !== "transparent"
        && nativeColor !== "rgba(0, 0, 0, 0)" ? nativeColor : "");
      if (!color) return;
      card.style.setProperty("--af-category-icon-color", color);
      card.style.setProperty("--af-subcategory-accent", color);
    });
  };

  // Beta 1.52: Use the existing, proven category initializer for topic
  // cards as well. The separate topic initializer did not run reliably.
  const topicSelector =
    ".categories-and-latest .latest-topic-list .latest-topic-list-item, " +
    "#list-area .topic-list:not(.category-list) > tbody > tr.topic-list-item";

  const syncTopic = (row) => {
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
  };

  const syncAll = () => {
    syncColors();
    syncMobileColors();
    document.querySelectorAll(topicSelector).forEach(syncTopic);
  };

  // Sync on actual interaction too, even when Discourse reuses a row.
  const syncOnInteraction = (event) => {
    const row = event.target.closest?.(topicSelector);
    if (row) syncTopic(row);
  };

  // Beta 1.53: Discourse can replace #main-outlet or append topic rows
  // after the initial render. Observe the persistent document body and
  // delegate interactions from document, not a replaceable outlet node.
  let pending = false;
  const scheduleSync = () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      pending = false;
      syncAll();
    });
  };

  api.onPageChange(scheduleSync);
  const observer = new MutationObserver(scheduleSync);
  const start = () => {
    observer.observe(document.body, { childList: true, subtree: true });
    document.addEventListener("pointerover", syncOnInteraction, true);
    document.addEventListener("focusin", syncOnInteraction, true);
    syncAll();
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
});
