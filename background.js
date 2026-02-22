chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "executeScript") {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const visibility = request.visibility || 'Unlisted';
            // First inject the visibility value as a global variable
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                func: (vis) => {
                    window.__YT_BATCH_PUBLISHER_VISIBILITY__ = vis;
                },
                args: [visibility]
            }, () => {
                // Then execute the main script
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id},
                    files: ['script.js']
                });
            });
        });
    }
});