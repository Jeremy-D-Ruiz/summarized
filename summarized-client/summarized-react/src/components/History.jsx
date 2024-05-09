import React, { useState ,useEffect} from "react";
import axios from 'axios'; 
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/summarized.css';

function viewHistory({user}){
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/chats/${user.uid}`);
            setChats(response.data);
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    useEffect(() => {
        fetchChats();
    }, [user.uid]);

    const handleDeleteChat = async (chatDate) => {
        try {
            await axios.delete(`http://localhost:8080/chats/${user.uid}/${chatDate}`);
            // If successful, fetch the updated chats
            fetchChats();
        } catch (error) {
            console.error('Error deleting chat:', error);
        }
    };

    const toggleShowText = (index) => {
        const updatedChats = [...chats];
        updatedChats[index] = {
            ...updatedChats[index],
            showText: !updatedChats[index].showText
        };
        setChats(updatedChats);
    };

    return (
        <>
        <div className="button-container" style={{ marginBottom: '20px' , backgroundColor: 'darkgray', padding: '10px', borderRadius: '5px' }}>
            <Button as={Link} to='/summarized' className="button">Home</Button>
        </div>
                <div className="row justify-content-start">
            {chats.length > 0 ? (
                chats.map((chat, index) => (
                    <div className="col-lg-6 mb-3" key={index}>
                        <div className="card border-primary ">
                            <div className="card-body">
                                <h5 className="card-title">Chat {index + 1} - {new Date(chat.date).toLocaleString()}</h5>
                                <div className="d-flex justify-content-between align-items-left">
                                    <Button onClick={() => toggleShowText(index)} className="button">
                                        {chat.showText ? "Hide" : "View"}
                                    </Button>
                                    <Button onClick={() => handleDeleteChat(chat.date)} className="button">
                                        Delete
                                    </Button>
                                </div>
                                {chat.showText && (
                                    <>
                                        <p className="card-text mt-3"><strong>Original:</strong> {chat.originalText}</p>
                                        <p className="card-text"><strong>Summarized:</strong> {chat.summarizedText}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h1>No Summarization History</h1>
            )}
        </div>
            
    </>
        
    )
};

export default viewHistory;