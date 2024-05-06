import React from 'react';

function TextBoxComponent({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder="Enter text to summarize..."
      rows={10}
      cols={50}
    />
  );
}

export default TextBoxComponent;