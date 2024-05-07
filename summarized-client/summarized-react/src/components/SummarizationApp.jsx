import React, { useState } from 'react';
import axios from 'axios'; 
import TextBoxComponent from './TextBox.jsx';
import SummarizeButtonComponent from './SummarizeButton.jsx'; 
import KeyConcepts from './ListKeyConcepts.jsx'; 
import LikeImFive from './LikeImFive.jsx';
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

  const handleSummarize = async () => {
    try {
      const response = await axios.get('http://localhost:8080/summarized', {
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
      if(user){
        await saveTextToDatabase(user.uid,inputText,response.data);
      }

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
      if(user){
        await saveTextToDatabase(user.uid,inputText,response.data);
      }

    } catch (error) {
      console.error('Error:', error);
    }
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
    <div>
      <div className='containter'>
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

                  {/* <select >
          <option value="">Select Summarization Type</option>
            <option value="top3">List Top 3 Concepts</option>
            <option value="top5">List Top 5 Concepts</option>
            <option value="explainLikeIm5">Explain Like I'm 5</option>
            <option value="nextSteps">What Next?</option>
          </select> */}

          <div> 
          <SummarizeButtonComponent onClick={handleSummarize} />
          <KeyConcepts onClick={handleKeyConcepts} />
          <LikeImFive onClick={handleLikeImFive} />
          </div>
      
        </div>

        <h2>Summarized Text:</h2>
        {summarizedText && (
          <p className='summarized-text-box'>{summarizedText}</p>
        )}
    
      </div>
    </div>
  );
}

export default SummarizationApp;