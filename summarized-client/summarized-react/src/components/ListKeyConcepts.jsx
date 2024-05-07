import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';


function KeyConcepts({ inputText, user, saveTextToDatabase, setSummarizedText }){

  const handleKeyConcepts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/keyconcepts', {
        params: {
          text: inputText,
        },
      });
      setSummarizedText(response.data); 
      if(user){
        await saveTextToDatabase(user.uid,inputText,response.data);
      }

    } catch (error) {
      console.error('Error:', error);
      alert('Invalid text. Please enter valid text. If this is a code snippet, please use the "Summarize Code" button.');
    }
  };

    return (
      <Button onClick={handleKeyConcepts} className="button">
      Key Concepts
    </Button>
      );

}

export default KeyConcepts;