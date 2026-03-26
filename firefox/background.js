browser.runtime.onMessage.addListener((request) => {
    if (request.action === "executeScript") {
        const visibility = request.visibility || 'Unlisted';
        browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
            browser.scripting.executeScript({
                target: {tabId: tabs[0].id},
                func: (vis) => {
                    window.__YT_BATCH_PUBLISHER_VISIBILITY__ = vis;
                },
                args: [visibility]
            }).then(() => {
                browser.scripting.executeScript({
                    target: {tabId: tabs[0].id},
                    files: ['script.js']
                });
            });
        });
    }
});
