console.log("Hello background!", { id: chrome.runtime.id });
chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
chrome.action.setBadgeText({ text: "100" });
chrome.action.setBadgeTextColor({ color: "#FFFFFF" });