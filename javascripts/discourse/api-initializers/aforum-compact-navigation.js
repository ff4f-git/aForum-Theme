import { apiInitializer } from "discourse/lib/api";

// Beta 1.61: Ask Discourse to render its own compact navigation.
// No DOM insertion, cloned links, or replacement controls.
export default apiInitializer("1.8.0", (api) => {
  api.registerValueTransformer("navigation-bar-dropdown-mode", ({ value }) => {
    return value || window.matchMedia("(max-width: 725px)").matches;
  });
});
