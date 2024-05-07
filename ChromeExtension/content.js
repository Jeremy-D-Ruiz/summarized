function getSelectedText() {
    const selection = window.getSelection();
    return selection.toString().trim();
}

function sendTextToBackground(text) {
    chrome.runtime.sendMessage({ action: 'summarize', text }, (response) => {
        if (response && response.summarizedText) {
            alert('Summarized Text:\n' + response.summarizedText);
        } else {
            console.error('Failed to summarize text');
        }
    });
}

document.addEventListener('mouseup', () => {
    const selectedText = getSelectedText();
    if (selectedText) {
        sendTextToBackground(selectedText);
    }
});
