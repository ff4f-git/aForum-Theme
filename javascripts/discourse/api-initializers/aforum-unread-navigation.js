import { apiInitializer } from "discourse/lib/api";

// Show the separate Unread view only when there are unread replies.
// Discourse's unified "New" mode may omit the native Unread tab.
export default apiInitializer("1.8.0", (api) => {
  const currentUser = api.getCurrentUser();
  if (!currentUser) {
    return;
  }

  const tracking = api.container.lookup("service:topic-tracking-state");

  api.addNavigationBarItem({
    name: "aforum-unread",
    // Keep the count reactive as topic read states change.
    init: (item) => {
      Object.defineProperty(item, "displayName", {
        configurable: true,
        get() {
          // This tracked value invalidates the label after read-state updates.
          tracking.messageCount;
          const count = tracking.countUnread();
          return count > 0 ? `Ungelesen (${count})` : "Ungelesen";
        },
      });
    },
    title: "Ungelesene Antworten in verfolgten Themen",
    href: "/unread",
    before: "hot",
    customFilter: () => tracking.countUnread() > 0,
    forceActive: (_category, _args, router) =>
      router.currentURL?.split("?")[0] === "/unread",
  });
});
