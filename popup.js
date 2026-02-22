document.getElementById('runScript').addEventListener('click', () => {
    const visibility = document.getElementById('visibility').value;
    chrome.runtime.sendMessage({action: "executeScript", visibility: visibility});
});