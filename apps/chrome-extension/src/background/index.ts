chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message:', message);
  sendResponse({ received: true });
});

chrome.storage.local.set({
  settings: {
    enabled: true,
  },
});

export {};
