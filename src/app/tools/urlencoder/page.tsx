'use client'
import React, { ChangeEvent, useState } from 'react';

const UrlEncoder = () => {
  const [input, setInput] = useState('');
  const [encoded, setEncoded] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    setEncoded(encodeURIComponent(value));
  };

  return (
    <div>
      <h2>URL Encoder</h2>
      <textarea
        rows={10}
        cols={50}
        placeholder="Enter text to encode..."
        value={input}
        onChange={handleInputChange}
      />
      <h3>Encoded Output:</h3>
      <textarea
        rows={4}
        cols={50}
        readOnly
        value={encoded}
      />
    </div>
  );
};

export default UrlEncoder;
