import React from 'react';
import '../styles/summarized.css';

function KeyConcepts({onClick}){

    return (
        <button className='button' onClick={onClick}>Get Key Concepts</button>
      );

}

export default KeyConcepts;