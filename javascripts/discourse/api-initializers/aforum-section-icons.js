import { apiInitializer } from "discourse/lib/api";
import { iconHTML } from "discourse-common/lib/icon-library";

// Alpha 13: Die rechte Überschrift ist kein Kind von .latest-topic-list.
// Beide Überschriften werden deshalb direkt im Main-Outlet gesucht.
export default apiInitializer("1.14.0", (api) => {
  function insertIcon(target, name, className) {
    if (target.querySelector(`.${className}`)) return;
    const holder = document.createElement("span");
    holder.className = `aforum-section-icon ${className}`;
    holder.setAttribute("aria-hidden", "true");
    holder.innerHTML = iconHTML(name).toString();
    target.prepend(holder);
  }

  function decorate() {
    document.querySelectorAll("#main-outlet .category-list thead th:first-child").forEach((heading) => {
      insertIcon(heading, "list", "aforum-section-icon--list");
    });

    // Überschrift steht je nach Discourse-Version außerhalb der Themenliste.
    document.querySelectorAll(
      "#main-outlet .table-heading, #main-outlet .category-list-heading, " +
      "#main-outlet .latest-topic-list-heading, #main-outlet .topic-list-heading, " +
      "#main-outlet .latest-topic-list h2, #main-outlet .latest-topic-list h3, " +
      "#main-outlet .latest-topic-list-container > :first-child"
    ).forEach((heading) => {
      const label = heading.textContent.replace(/\s+/g, " ").trim().toLocaleLowerCase("de");
      if (label !== "aktuell") return;
      heading.classList.add("aforum-current-heading");
      insertIcon(heading, "fire", "aforum-section-icon--fire");
    });
  }

  decorate();
  api.onPageChange(decorate);
  const observer = new MutationObserver(decorate);
  observer.observe(document.body, { childList: true, subtree: true });
});
