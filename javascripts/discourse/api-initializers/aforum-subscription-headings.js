import { apiInitializer } from "discourse/lib/api";
import { iconElement } from "discourse/lib/icon-library";

// Nur die beiden Abonnement-Produktüberschriften optisch aufteilen.
// Die eigentlichen Produktdaten und der Stripe-Checkout bleiben unverändert.
export default apiInitializer("1.8.0", (api) => {
  let groupFlairs;

  function normalizeColor(color) {
    if (!color || !/^(#?[0-9a-f]{3}|#?[0-9a-f]{6})$/i.test(color)) {
      return null;
    }
    return color.startsWith("#") ? color : `#${color}`;
  }

  async function updateGroupFlairs() {
    if (!document.querySelector(".product-list > .product")) {
      return;
    }
    try {
      if (!groupFlairs) {
        const response = await fetch("/groups.json", { credentials: "same-origin" });
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        groupFlairs = new Map((data.groups || []).map((group) => [group.name.toLowerCase(), group]));
      }

      document.querySelectorAll(".product-list > .product").forEach((card) => {
        const plan = card.querySelector(".aforum-plan-name")?.textContent?.trim().toLowerCase();
        const group = plan && groupFlairs.get(plan);
        if (!group?.flair_url || card.querySelector(".aforum-group-flair")) {
          return;
        }

        const flair = document.createElement("span");
        flair.className = "aforum-group-flair";
        flair.setAttribute("aria-hidden", "true");
        const bg = normalizeColor(group.flair_bg_color);
        const fg = normalizeColor(group.flair_color);
        if (bg) {
          flair.style.backgroundColor = bg;
        }
        if (fg) {
          flair.style.color = fg;
        }

        const iconName = group.flair_url.replace(/^fa:\/\//, "").replace(/^fa-/, "");
        if (/^[a-z0-9-]+$/i.test(iconName) && !group.flair_url.includes("/")) {
          const svg = iconElement(iconName, { ignoreMissing: true });
          if (!svg) {
            return;
          }
          flair.append(svg);
        } else if (/^fa:\/\/[a-z0-9-]+$/i.test(group.flair_url)) {
          const svg = iconElement(iconName, { ignoreMissing: true });
          if (!svg) {
            return;
          }
          flair.append(svg);
        } else if (group.flair_url.startsWith("/") || group.flair_url.startsWith(window.location.origin)) {
          const image = document.createElement("img");
          image.src = group.flair_url;
          image.alt = "";
          flair.append(image);
        } else {
          return;
        }
        card.prepend(flair);
        card.classList.add("aforum-has-group-flair");
      });
    } catch (_error) {
      // Bei fehlenden Gruppendaten bleiben die bisherigen Badge-Icons sichtbar.
    }
  }

  function formatSubscriptionTitles() {
    document.querySelectorAll(".product-list > .product > h2").forEach((heading) => {
      if (heading.querySelector(".aforum-plan-heading")) {
        return;
      }

      const original = heading.textContent.trim().replace(/\s+/g, " ");
      const match = original.match(/^(Premium|Sponsoren)\s+(\d[\d.,]*\s*€)\s+(pro\s+Jahr)$/i);
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
      price.textContent = match[2].replace(/\s*€$/, " €");
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
    requestAnimationFrame(() => {
      formatSubscriptionTitles();
      updateGroupFlairs();
    });
    updateGroupFlairs();
  });
  formatSubscriptionTitles();
  updateGroupFlairs();
});
