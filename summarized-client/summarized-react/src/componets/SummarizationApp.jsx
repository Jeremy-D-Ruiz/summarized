import React, { useState } from 'react';
import axios from 'axios'; 

function SummarizationApp() {
  const [inputText, setInputText] = useState('');
  const [summarizedText, setSummarizedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Make a POST request to your backend endpoint with the input text
      const response = await axios.post('generate', {
        text: inputText,
      });
      // Set the summarized text in the state
      setSummarizedText(response.data.summarizedText);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Summarized</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text to summarize..."
        rows={10}
        cols={50}
      />
      <br />
      <button onClick={handleSubmit}>Summarize</button>
      <br />
      <h2>Summarized Text:</h2>
      <p>{summarizedText}</p>
    </div>
  );
}

export default SummarizationApp;