import React, { useState } from 'react';
import axios from 'axios'; 

import TextBoxComponent from './TextBox.jsx';
import SummarizeButtonComponent from './SummarizeButton.jsx'; 
import KeyConcepts from './ListKeyConcepts.jsx'; 
import LikeImFive from './LikeImFive.jsx';
import CodeSummarize from './CodeSummarize.jsx';

import '../styles/summarized.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { signOut } from 'firebase/auth';


function SummarizationApp({user, auth}) {
  const [inputText, setInputText] = useState('');
  const [summarizedText, setSummarizedText] = useState('');


  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const saveTextToDatabase = async(uid,originalText,summarizedText)=>{
    try {
      //save text to database
      await axios.post(`http://localhost:8080/addHistory?id=${uid}&originalText=${encodeURIComponent(originalText)}&summarizedText=${encodeURIComponent(summarizedText)}`);

    } catch (error) {
      console.error('Error saving text to database:', error);
    }

  };

  const handleSignOut = async () => {
    try {
      if (auth) {
        await signOut(auth); // Sign out the user using Firebase Auth
        console.log("User signed out");
      } else {
        console.error("Authentication instance not found");
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };



  return (
    <div className="container">
      <div className="left-column">
        <h1>Summarized</h1>
        <div className="button-container">
          {!user && (
            <div>
              <Button as={Link} to="/auth-google-sign-in" className="button">Sign In</Button>
              <Button as={Link} to="/auth-google-sign-up" className="button">Create Account</Button>
            </div>
          )}
          {user && (
            <div>
              <Button as={Link} to="/history" className="button">View History</Button>
              <Button onClick={handleSignOut} className="button sign-out">Sign Out</Button>
            </div>
          )}
        </div>
        <div className="text-box-container">
          <TextBoxComponent 
            value={inputText}
            onChange={handleInputChange}
          />
          <div className="action-buttons">

            <SummarizeButtonComponent inputText={inputText} user={user} 
            saveTextToDatabase={saveTextToDatabase} setSummarizedText={setSummarizedText} />
            
            <LikeImFive inputText={inputText} user={user}
            saveTextToDatabase={saveTextToDatabase} setSummarizedText={setSummarizedText} />
            
            <KeyConcepts inputText={inputText} user={user} 
            saveTextToDatabase={saveTextToDatabase} setSummarizedText={setSummarizedText} />
          
            
          <CodeSummarize inputText={inputText} user={user} 
            saveTextToDatabase={saveTextToDatabase} setSummarizedText={setSummarizedText} />
         
         </div>
        </div>
      </div>

      {summarizedText && (
        <div className="right-column">
          <h2>Summarized Text:</h2>
          <p className='summarized-text-box'>{summarizedText}</p>
        </div>
      )}
      
    </div>
  );
}

export default SummarizationApp;