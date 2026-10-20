import { apiInitializer } from "discourse/lib/api";
import { iconHTML } from "discourse-common/lib/icon-library";

export default apiInitializer("1.14.0", (api) => {
  function insertIcon(target, name, className) {
    if (!target || target.querySelector(`.${className}`)) return;
    const holder = document.createElement("span");
    holder.className = `aforum-section-icon ${className}`;
    holder.setAttribute("aria-hidden", "true");
    holder.innerHTML = iconHTML(name).toString();
    target.prepend(holder);
  }

  function decorate() {
    document.querySelectorAll(".category-list thead th:first-child").forEach((th) => {
      insertIcon(th, "list", "aforum-section-icon--list");
    });

    // Discourse kann die rechte Überschrift außerhalb von .latest-topic-list
    // rendern. Darum den sichtbaren Titel im Bereich der aktuellen Themen finden.
    document.querySelectorAll(".latest-topic-list").forEach((list) => {
      const parent = list.parentElement;
      if (!parent) return;
      const candidates = [
        ...parent.querySelectorAll(":scope > .table-heading, :scope > .category-list-heading, :scope > h2, :scope > h3, :scope > header, :scope > div:first-child"),
        ...list.querySelectorAll(":scope > .table-heading, :scope > .category-list-heading, :scope > h2, :scope > h3")
      ];
      const heading = candidates.find((el) =>
        el.textContent.trim().toLocaleLowerCase("de") === "aktuell"
      );
      if (heading) {
        heading.classList.add("aforum-current-heading");
        insertIcon(heading, "fire", "aforum-section-icon--fire");
      }
    });
  }

  decorate();
  api.onPageChange(decorate);
  const observer = new MutationObserver(decorate);
  observer.observe(document.body, { childList: true, subtree: true });
});
