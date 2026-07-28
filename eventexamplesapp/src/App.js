import React, { useState } from 'react';

function App() {
  // State to hold the input field value
  const [inputText, setInputText] = useState('');

  // 1. onClick Event Handler
  const handleButtonClick = () => {
    alert('Action triggered: Button was clicked!');
  };

  // 2. onChange Event Handler
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #bdc3c7', paddingBottom: '10px' }}>
        React Event Handlers 🖱️
      </h1>

      {/* onClick Example */}
      <div style={{ padding: '20px', margin: '20px 0', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h3 style={{ margin: '0 0 15px 0' }}>1. The onClick Event</h3>
        <p style={{ fontSize: '14px', color: '#666' }}>Click the button below to trigger an alert.</p>
        <button 
          onClick={handleButtonClick}
          style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Click Me!
        </button>
      </div>

      {/* onChange Example */}
      <div style={{ padding: '20px', margin: '20px 0', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h3 style={{ margin: '0 0 15px 0' }}>2. The onChange Event</h3>
        <p style={{ fontSize: '14px', color: '#666' }}>Type in the input box to see live state updates.</p>
        <input 
          type="text" 
          placeholder="Start typing here..." 
          value={inputText}
          onChange={handleInputChange}
          style={{ padding: '10px', fontSize: '16px', width: '80%', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#e8f8f5', borderRadius: '4px', borderLeft: '4px solid #27ae60' }}>
          <strong>Live Output: </strong> 
          <span style={{ color: '#27ae60' }}>{inputText || "(Waiting for input...)"}</span>
        </div>
      </div>
    </div>
  );
}

export default App;