import React, { useState } from 'react';
import axios from 'axios'; 
import TextBoxComponent from './TextBox.jsx';
import SummarizeButtonComponent from './SummarizeButton.jsx'; 
import KeyConcepts from './ListKeyConcepts.jsx'; 
import LikeImFive from './LikeImFive.jsx';
import '../styles/summarized.css';

function SummarizationApp() {
  const [inputText, setInputText] = useState('');
  const [summarizedText, setSummarizedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSummarize = async () => {
    try {
      const response = await axios.get('http://localhost:8080/summarized', {
        params: {
          text: inputText,
        },
      });
      setSummarizedText(response.data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleKeyConcepts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/keyconcepts', {
        params: {
          text: inputText,
        },
      });
      setSummarizedText(response.data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLikeImFive = async () => {
    try {
      const response = await axios.get('http://localhost:8080/likeimfive', {
        params: {
          text: inputText,
        },
      });
      setSummarizedText(response.data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <div>
      <div className='containter'>
        <h1>Summarized</h1>
        <TextBoxComponent 
          value={inputText}
          onChange={handleInputChange}
        />

          {/* <select >
          <option value="">Select Summarization Type</option>
            <option value="top3">List Top 3 Concepts</option>
            <option value="top5">List Top 5 Concepts</option>
            <option value="explainLikeIm5">Explain Like I'm 5</option>
            <option value="nextSteps">What Next?</option>
          </select> */}

          
       

          <SummarizeButtonComponent onClick={handleSummarize} />
          <KeyConcepts onClick={handleKeyConcepts} />
          <LikeImFive onClick={handleLikeImFive} />
    
        <h2>Summarized Text:</h2>
        <p>{summarizedText}</p>
      </div>
    </div>
  );
}

export default SummarizationApp;