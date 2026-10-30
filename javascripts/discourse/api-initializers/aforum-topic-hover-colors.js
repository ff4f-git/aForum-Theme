import { apiInitializer } from "discourse/lib/api";

// Beta 1.50: Discourse bleibt die einzige Quelle fuer Kategoriefarben.
// CSS kann die Variable eines Badge-Kindes nicht auf dessen Elternkarte
// vererben; deshalb wird die Badgefarbe auf die Karte uebertragen.
export default apiInitializer("1.8.0", (api) => {
  const selector =
    ".categories-and-latest .latest-topic-list .latest-topic-list-item, " +
    "#list-area .topic-list:not(.category-list) > tbody > tr.topic-list-item";
  let scheduled = false;

  function syncTopicColors() {
    scheduled = false;
    document.querySelectorAll(selector).forEach((row) => {
      const badge = row.querySelector(".badge-category__wrapper");
      const color = badge
        ? getComputedStyle(badge).getPropertyValue("--category-badge-color").trim()
        : "";

      if (color) {
        if (row.style.getPropertyValue("--af-topic-hover-color") !== color) {
          row.style.setProperty("--af-topic-hover-color", color);
        }
      } else {
        row.style.removeProperty("--af-topic-hover-color");
      }
    });
  }

  function scheduleSync() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(syncTopicColors);
  }

  api.onPageChange(scheduleSync);

  const observer = new MutationObserver((mutations) => {
    // React to new/replaced topic cards and badge color changes, but
    // ignore the inline variable writes on topic rows themselves.
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
        attributeFilter: ["style"],
      });
    }
    scheduleSync();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
});
