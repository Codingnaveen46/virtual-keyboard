import React, { useState } from 'react';
import VirtualKeyboard from './components/VirtualKeyboard'
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleKeyboardChange = (newText) => {
    setText(newText);
  };

  return (
    <div className="App">
      <h1>Virtual Keyboard</h1>
      <VirtualKeyboard onChange={handleKeyboardChange} />
      <p>Typed Text: {text}</p>
    </div>
  );
}

export default App;
