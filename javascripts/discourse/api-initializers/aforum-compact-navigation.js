import { apiInitializer } from "discourse/lib/api";
import TrackedMediaQuery from "discourse/lib/tracked-media-query";

// Beta 1.0: native dropdown at 980 px to accommodate the unread tab.
export default apiInitializer("1.8.0", (api) => {
  const compactViewport = new TrackedMediaQuery("(max-width: 980px)");
  api.registerValueTransformer("navigation-bar-dropdown-mode", ({ value }) => {
    return value || compactViewport.matches;
  });
});
