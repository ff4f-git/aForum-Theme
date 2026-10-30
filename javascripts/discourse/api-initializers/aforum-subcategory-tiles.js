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
      row.querySelectorAll(".subcategories").forEach((list) => {
        list.style.setProperty("--af-subcategory-accent", color);
      });
    });
  };

  api.onPageChange(() => requestAnimationFrame(syncColors));
  const observer = new MutationObserver(() => requestAnimationFrame(syncColors));
  const start = () => {
    const root = document.querySelector("#main-outlet");
    if (root) observer.observe(root, { childList: true, subtree: true });
    syncColors();
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
});
