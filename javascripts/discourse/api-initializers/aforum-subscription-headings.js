import { apiInitializer } from "discourse/lib/api";

// Nur die beiden Abonnement-Produktüberschriften optisch aufteilen.
// Die eigentlichen Produktdaten und der Stripe-Checkout bleiben unverändert.
export default apiInitializer("1.8.0", (api) => {
  function formatSubscriptionTitles() {
    document.querySelectorAll(".product-list > .product > h2").forEach((heading) => {
      if (heading.querySelector(".aforum-plan-heading")) {
        return;
      }

      const original = heading.textContent.trim().replace(/\\s+/g, " ");
      const match = original.match(/^(Premium|Sponsoren)\\s+(\\d[\\d.,]*\\s*€)\\s+(pro\\s+Jahr)$/i);
      if (!match) {
        return; // Unbekannte Produkte oder Formate niemals verändern.
      }

      const wrapper = document.createElement("span");
      wrapper.className = "aforum-plan-heading";
      const name = document.createElement("span");
      name.className = "aforum-plan-name";
      name.textContent = match[1];
      const price = document.createElement("span");
      price.className = "aforum-plan-price";
      price.textContent = match[2].replace(/\\s*€$/, " €");
      const interval = document.createElement("span");
      interval.className = "aforum-plan-interval";
      interval.textContent = match[3];
      wrapper.append(name, price, interval);
      heading.replaceChildren(wrapper);
    });
  }

  api.onPageChange(() => {
    formatSubscriptionTitles();
    // Der Plugin-Inhalt kann nach dem Routenwechsel asynchron erscheinen.
    requestAnimationFrame(formatSubscriptionTitles);
  });
  formatSubscriptionTitles();
});
