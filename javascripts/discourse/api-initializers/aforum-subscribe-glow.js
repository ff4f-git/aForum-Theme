import { apiInitializer } from "discourse/lib/api";

// Ergänzung zum bestehenden aForum-Theme: keine bestehenden Dateien ersetzen.
export default apiInitializer("1.14.0", (api) => {
  const STYLE_ID = "aforum-subscribe-glow-style";
  const CLASS_NAME = "aforum-subscribe-glow";
  const css = `
    .navigation-container a.${CLASS_NAME},
    .navigation-container button.${CLASS_NAME} {
      position: relative;
      isolation: isolate;
      overflow: hidden;
      box-sizing: border-box;
      color: #d6b36a !important;
      background: linear-gradient(115deg, #211a0e 0%, #302511 50%, #211a0e 100%) !important;
      border: 1px solid #d6b36a !important;
      border-radius: 5px !important;
      margin: 5px 3px !important;
      padding: 0 13px !important;
      min-height: 38px;
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      transition: background-color .2s ease, box-shadow .2s ease, transform .2s ease;
      animation: aforum-subscribe-soft-pulse 10s ease-in-out infinite;
    }
    .navigation-container .${CLASS_NAME}::after {
      content: "";
      position: absolute;
      z-index: -1;
      top: -30%; bottom: -30%;
      left: -70%;
      width: 40%;
      transform: skewX(-24deg) translateX(-240%);
      background: linear-gradient(90deg, transparent, rgba(255,236,173,.24), transparent);
      pointer-events: none;
      animation: aforum-subscribe-shimmer 10s ease-in-out infinite;
    }
    .navigation-container .${CLASS_NAME}:hover,
    .navigation-container .${CLASS_NAME}:focus-visible {
      color: #ffe0a0 !important;
      box-shadow: 0 0 13px rgba(214,179,106,.38) !important;
      transform: translateY(-1px);
    }
    .navigation-container .${CLASS_NAME}:focus-visible {
      outline: 2px solid #ffe0a0 !important;
      outline-offset: 2px;
    }
    @keyframes aforum-subscribe-soft-pulse {
      0%, 8%, 22%, 100% { box-shadow: 0 0 0 rgba(214,179,106,0); }
      13% { box-shadow: 0 0 13px rgba(214,179,106,.38); }
    }
    @keyframes aforum-subscribe-shimmer {
      0%, 9%, 100% { transform: skewX(-24deg) translateX(-240%); }
      17%, 25% { transform: skewX(-24deg) translateX(680%); }
    }
    @media (prefers-reduced-motion: reduce) {
      .navigation-container .${CLASS_NAME},
      .navigation-container .${CLASS_NAME}::after { animation: none !important; transition: none !important; }
    }
  `;

  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  function decorate() {
    document.querySelectorAll(".navigation-container a, .navigation-container button").forEach((element) => {
      const label = (element.textContent || "").replace(/\s+/g, " ").trim().toLocaleLowerCase("de");
      element.classList.toggle(CLASS_NAME, label === "abonnieren");
    });
  }

  decorate();
  api.onPageChange(decorate);
  const observer = new MutationObserver(decorate);
  observer.observe(document.body, { childList: true, subtree: true });
});
