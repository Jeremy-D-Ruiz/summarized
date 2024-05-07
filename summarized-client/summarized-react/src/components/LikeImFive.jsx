import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function LikeImFive({ inputText, user, saveTextToDatabase, setSummarizedText }){

  const handleLikeImFive = async () => {
    try {
      const response = await axios.get('http://localhost:8080/likeimfive', {
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
      <Button onClick={handleLikeImFive} className="button">
      Like Im Five
    </Button>
      );

}

export default LikeImFive;