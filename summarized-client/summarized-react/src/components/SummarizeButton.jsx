import React from 'react';
import '../styles/summarized.css';

function SummarizeButtonComponent({ onClick }) {
  return (
    <button className='button' onClick={onClick}>Summarize</button>
  );
}

export default SummarizeButtonComponent;