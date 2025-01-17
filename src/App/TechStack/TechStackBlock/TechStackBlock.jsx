import React from 'react';
import './TechStackBlock.css';
export const TechStackBlock = ({ image, text }) => {
  return (
    <>
      <div className="TechStackBlock">
        <div className="TechStackBlock__image">{image}</div>
        <h3 className="TechStackBlock__text">{text}</h3>
      </div>
    </>
  );
};
