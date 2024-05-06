import React, { useState ,useEffect} from "react";
import axios from 'axios'; 
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/summarized.css';

function viewHistory({user}){
    const [orginalChatHistory,setOriginalHistory] = useState([]);
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
        <div>
        <h1>Original</h1>
        <ul>
            {orginalChatHistory.map((chat, index) => (
                <li key={index}>{chat}</li>
            ))}
        </ul>

        <h1>Summarized</h1>
        <ul>
            {summarizedChatHistory.map((chat, index) => (
                <li key={index}>{chat}</li>
            ))}
            
         </ul>
         
        <div className="button-container">
         <Button as={Link} to='/summarized' className="button">Home</Button>
         </div>
        </div>
        
        </>
        
    )
};

export default viewHistory;