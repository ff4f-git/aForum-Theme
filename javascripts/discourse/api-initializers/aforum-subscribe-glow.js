import { apiInitializer } from "discourse/lib/api";

// Alpha 10: unaufdringlicher Bronze-Link statt animiertem Abonnieren-Button.
// Dateiname bleibt bewusst erhalten, damit GitHub-Updates die alte Datei überschreiben.
export default apiInitializer("1.14.0", (api) => {
  const CLASS_NAME = "aforum-subscribe-link";

  function decorate() {
    document.querySelectorAll(".navigation-container a, .navigation-container button").forEach((element) => {
      const label = (element.textContent || "").replace(/\s+/g, " ").trim().toLocaleLowerCase("de");
      const isSubscribe = label === "abonnieren" || label === "★ abonnieren" || label === "☆ abonnieren";
      if (element.classList.contains(CLASS_NAME) !== isSubscribe) {
        element.classList.toggle(CLASS_NAME, isSubscribe);
      }
      // Altklasse aus der vorherigen Version aufräumen.
      if (element.classList.contains("aforum-subscribe-glow")) {
        element.classList.remove("aforum-subscribe-glow");
      }
    });
    document.getElementById("aforum-subscribe-glow-style")?.remove();
  }

  decorate();
  api.onPageChange(decorate);
  const observer = new MutationObserver(decorate);
  observer.observe(document.body, { childList: true, subtree: true });
});
