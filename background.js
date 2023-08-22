chrome.contextMenus.create({
  id: "nonsite",
  title: "nonsite",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "nonsite") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://${selectedText}.com`;
    chrome.tabs.create({ url: archiveUrl });
  }
});
