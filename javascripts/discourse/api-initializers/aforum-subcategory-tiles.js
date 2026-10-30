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
    document.querySelectorAll(topicSelector).forEach(syncTopic);
  };

  // Sync on actual interaction too, even when Discourse reuses a row.
  const syncOnInteraction = (event) => {
    const row = event.target.closest?.(topicSelector);
    if (row) syncTopic(row);
  };

  api.onPageChange(() => requestAnimationFrame(syncAll));
  const observer = new MutationObserver(() => requestAnimationFrame(syncAll));
  const start = () => {
    const root = document.querySelector("#main-outlet");
    if (root) {
      observer.observe(root, { childList: true, subtree: true });
      root.addEventListener("pointerover", syncOnInteraction, true);
      root.addEventListener("focusin", syncOnInteraction, true);
    }
    syncAll();
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
});
