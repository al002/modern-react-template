console.log('Narauu content script loaded');

function injectElements() {
  const container = document.createElement('div');
  container.id = 'narauu-container';
  document.body.appendChild(container);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Content script received message:', message);
  sendResponse({ received: true });
});

function initialize() {
  chrome.storage.local.get(['settings'], (result) => {
    if (result.settings?.enabled) {
      injectElements();
    }
  });
}

initialize();

export {};
