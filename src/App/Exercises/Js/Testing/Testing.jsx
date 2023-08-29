import React, { useState } from 'react';
import './style.css';

export function sum(a, b) {
  return a + b;
}

export const handleOnClick = (setVisible) => {
  setVisible((prevVisible) => !prevVisible);
};

export function Testing() {
  const [isVisible, setVisible] = useState(false)
  return (
    <div className='mainDivConteinerTesting'>
      <h1>Testing Jest </h1>
      <p>Funkcja sum: {sum(1, 5)}</p>
      <button onClick={() => handleOnClick(setVisible, isVisible)}>kliknij</button>
      <p>visible or not {isVisible && <span>widdać</span>}</p>
    </div>
  );
}
