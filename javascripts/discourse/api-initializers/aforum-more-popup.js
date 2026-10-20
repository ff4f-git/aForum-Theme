import { apiInitializer } from "discourse/lib/api";

// Verwendet die originalen Discourse-Menüeinträge und deren Links.
// Keine Duplikate und keine eigenen Navigationsrouten.
export default apiInitializer("1.14.0", (api) => {
  const desktop = window.matchMedia("(min-width: 900px)");
  const menuSelectors = [
    ".sidebar-more-section-links",
    ".sidebar-more-section-content",
    ".sidebar-more-section .sidebar-section-content",
  ].join(",");
  let current = null;
  let trigger = null;

  function isVisible(element) {
    return !!(element && element.getClientRects().length && getComputedStyle(element).display !== "none");
  }

  function locateTrigger(menu) {
    const sidebar = menu.closest(".sidebar-wrapper");
    if (!sidebar) return null;
    const candidates = sidebar.querySelectorAll("button, a, [role='button']");
    return [...candidates].find((node) => {
      const label = (node.getAttribute("aria-label") || node.textContent || "").trim().toLocaleLowerCase("de");
      return label === "mehr" || label === "more";
    }) || null;
  }

  function clear() {
    if (current) {
      current.classList.remove("aforum-more-popup");
      current.style.removeProperty("--aforum-more-top");
      current.style.removeProperty("--aforum-more-left");
    }
    current = null;
    trigger = null;
  }

  function refresh() {
    if (!desktop.matches) { clear(); return; }
    const menu = [...document.querySelectorAll(menuSelectors)].find(isVisible);
    if (!menu) { clear(); return; }
    const button = locateTrigger(menu);
    if (!button) { clear(); return; }
    if (current && current !== menu) clear();
    current = menu;
    trigger = button;
    const r = button.getBoundingClientRect();
    const sidebar = menu.closest(".sidebar-wrapper").getBoundingClientRect();
    const top = Math.max(12, Math.min(r.top, window.innerHeight - 160));
    const left = Math.max(12, Math.min(sidebar.right + 8, window.innerWidth - 290));
    if (menu.style.getPropertyValue("--aforum-more-top") !== `${top}px`) menu.style.setProperty("--aforum-more-top", `${top}px`);
    if (menu.style.getPropertyValue("--aforum-more-left") !== `${left}px`) menu.style.setProperty("--aforum-more-left", `${left}px`);
    if (!menu.classList.contains("aforum-more-popup")) menu.classList.add("aforum-more-popup");
  }

  // Ein Klick außerhalb schließt über den nativen Discourse-Trigger.
  document.addEventListener("pointerdown", (event) => {
    if (!current || !trigger) return;
    if (current.contains(event.target) || trigger.contains(event.target)) return;
    trigger.click();
  }, true);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && current && trigger) {
      trigger.click();
      trigger.focus();
    }
  });
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; refresh(); });
  });
  let scheduled = false;
  observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "aria-expanded", "hidden", "style"] });
  window.addEventListener("resize", refresh);
  window.addEventListener("scroll", refresh, { passive: true });
  api.onPageChange(refresh);
  refresh();
});
