document.getElementById('runScript').addEventListener('click', () => {
    const visibility = document.getElementById('visibility').value;
    browser.runtime.sendMessage({action: "executeScript", visibility: visibility});
});
