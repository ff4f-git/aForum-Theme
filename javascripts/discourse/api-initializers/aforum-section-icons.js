import { apiInitializer } from "discourse/lib/api";
import { iconHTML } from "discourse-common/lib/icon-library";

// Alpha 11: Discourse/Font-Awesome-Icons statt Unicode-Sonderzeichen.
export default apiInitializer("1.14.0", (api) => {
  // Standard-Icons von Discourse: keine zusätzliche Registrierung nötig.

  function insertIcon(target, name, className) {
    if (!target || target.querySelector(`.${className}`)) return;
    const holder = document.createElement("span");
    holder.className = `aforum-section-icon ${className}`;
    holder.setAttribute("aria-hidden", "true");
    holder.innerHTML = iconHTML(name).toString();
    target.prepend(holder);
  }

  function decorate() {
    document.querySelectorAll(".category-list thead th:first-child").forEach((th) =>
      insertIcon(th, "list", "aforum-section-icon--list")
    );
    document.querySelectorAll(".latest-topic-list .table-heading").forEach((heading) =>
      insertIcon(heading, "fire", "aforum-section-icon--fire")
    );
  }

  decorate();
  api.onPageChange(decorate);
  const observer = new MutationObserver(decorate);
  observer.observe(document.body, { childList: true, subtree: true });
});
