export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });
  browser.action.setBadgeBackgroundColor({ color: "#FF0000" });
  browser.action.setBadgeText({ text: "100" });
  browser.action.setBadgeTextColor({ color: "#FFFFFF" });
});
