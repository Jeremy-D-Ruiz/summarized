import React, { useState ,useEffect} from "react";
import axios from 'axios'; 
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/summarized.css';

function viewHistory({user}){
    const [originalChatHistory,setOriginalHistory] = useState([]);
    const [summarizedChatHistory,setSummarizedHistory] = useState([]);

    useEffect(() => {
        const getOriginalTexts = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/original-texts/${user.uid}`);
                setOriginalHistory(response.data); 
            } catch (error) {
                console.error('Error:', error);
            }
        };

        const getSummarizedTexts = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/summarized-texts/${user.uid}`);
                setSummarizedHistory(response.data); 
            } catch (error) {
                console.error('Error:', error);
            }
        };

        getOriginalTexts();
        getSummarizedTexts();
    }, [user.uid]);


    return(
        <>
        <div className="container">
          <div className="row">
            {originalChatHistory.length > 0 ? (
              originalChatHistory.map((originalText, index) => (
                <div className="col-lg-6 mb-3" key={index}>
                  <div className="card border-primary">
                    <div className="card-body">
                      <h5 className="card-title">Chat {index + 1}</h5>
                      <div className="d-flex">
                        <p className="card-text mr-3"><strong>Original:</strong> {originalText}</p>
                        <p className="card-text"><strong>Summarized:</strong> {summarizedChatHistory[index]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>No Summarization History </h1>
            )}
          </div>
        </div>
        <div className="button-container">
          <Button as={Link} to='/summarized' className="button">Home</Button>
        </div>
      </>
        
    )
};

export default viewHistory;