const BACKEND_URL = 'http://localhost:8080/summarized';

async function summarizeText(text) {
    try {
        const response = await fetch(BACKEND_URL + '?text=' + encodeURIComponent(text));
        if (!response.ok) {
            throw new Error('Failed to summarize text');
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error('Error summarizing text:', error);
        return null;
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'summarize') { 
        summarizeText(message.text) // Call summarizeText with the provided text
            .then((summarizedText) => {
                sendResponse({ summarizedText }); // Send the summarized text back to the content script
            })
            .catch((error) => {
                console.error('Error:', error);
                sendResponse({ error: 'Failed to summarize text' });
            });
        return true;
    }
});