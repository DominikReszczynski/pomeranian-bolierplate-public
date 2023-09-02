import React from 'react';
import { NavLink } from 'react-router-dom';

import './categories.css';

import htmlIcon from '../Images/tech-stack/html.svg'
import jsIcon from '../Images/tech-stack/js.svg'
import reactIcon from '../Images/tech-stack/react.svg'
export const Categories = () => {
  return (
    <>
      <div className="exercises-categories">
        <h2>Kategorie</h2>

        <NavLink to="html-css"><div className='exercises-categories__ls'><img src={htmlIcon} alt="htmlIcon" /><p>HTML & CSS</p></div></NavLink>
        <NavLink to="js"><div className='exercises-categories__ls'><img src={jsIcon} alt="htmlIcon" /><p>JS</p></div></NavLink>
        <NavLink to="react"><div className='exercises-categories__ls'><img src={reactIcon} alt="htmlIcon" /><p>React</p></div></NavLink>
      </div>
    </>
  );
};
