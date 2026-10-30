import { apiInitializer } from "discourse/lib/api";
import TrackedMediaQuery from "discourse/lib/tracked-media-query";

// Beta 1.62: reactive native dropdown at 725 px.
export default apiInitializer("1.8.0", (api) => {
  const compactViewport = new TrackedMediaQuery("(max-width: 725px)");
  api.registerValueTransformer("navigation-bar-dropdown-mode", ({ value }) => {
    return value || compactViewport.matches;
  });
});
