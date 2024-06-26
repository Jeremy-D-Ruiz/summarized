import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function SummarizeButtonComponent({ inputText, user, saveTextToDatabase, setSummarizedText }) {
  
  const handleSummarize = async () => {
    try {
      const response = await axios.get('http://localhost:8080/summarized', {
        params: { text: inputText },
      });
      setSummarizedText(response.data);
      if (user) {
        await saveTextToDatabase(user.uid, inputText, response.data);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Invalid text. Please enter valid text. If this is a code snippet, please use the "Summarize Code" button.');
    }
  };

  return (
    <Button onClick={handleSummarize} className="button">
      Summarize
    </Button>
  );
}

export default SummarizeButtonComponent;