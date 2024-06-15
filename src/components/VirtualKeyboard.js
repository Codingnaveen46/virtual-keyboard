import React, { useState } from 'react';
import './VirtualKeyboard.css'; // Add some basic styling

const keys = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ['Space', 'Backspace']
];

const VirtualKeyboard = ({ onChange }) => {
  const [input, setInput] = useState('');

  const handleKeyClick = (key) => {
    let newInput = input;
    if (key === 'Backspace') {
      newInput = newInput.slice(0, -1);
    } else if (key === 'Space') {
      newInput += ' ';
    } else {
      newInput += key;
    }
    setInput(newInput);
    onChange(newInput);
  };

  return (
    <div className="keyboard">
      <input type="text" value={input} readOnly className="keyboard-input" />
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              className={`keyboard-key ${key === 'Space' || key === 'Backspace' ? 'special' : ''}`}
              onClick={() => handleKeyClick(key)}
            >
              {key === 'Space' ? ' ' : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VirtualKeyboard;
