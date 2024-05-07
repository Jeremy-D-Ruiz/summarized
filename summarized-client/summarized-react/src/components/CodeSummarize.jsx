import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function CodeSummarize({ inputText, user, saveTextToDatabase, setSummarizedText }){

  const handleCodeSummary = async () => {
    try {
      const response = await axios.post('http://localhost:8080/summarize-code', inputText);
      setSummarizedText(response.data); 
      if(user){
        await saveTextToDatabase(user.uid,inputText,response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Button onClick={handleCodeSummary} className="button">
      Summarize Code
    </Button>
  );
}

export default CodeSummarize;