import React from 'react';
import { NavLink } from 'react-router-dom';

import './categories.css';

import htmlIcon from '../Images/tech-stack/html.svg'
import jsIcon from '../Images/tech-stack/js.svg'
import reactIcon from '../Images/tech-stack/react.svg'
export const Categories = () => {
  return (
    <>
      <div className="exercises-module">
        <h2>Kategorie</h2>

        <div className='exercises-module__categories'>
          <NavLink to="html-css" ><div className='exercises-module__ls'><img src={htmlIcon} alt="htmlIcon" /><span>HTML & CSS</span></div></NavLink>
          <NavLink to="js"><div className='exercises-module__ls'><img src={jsIcon} alt="htmlIcon" /><span>JS</span></div></NavLink>
          <NavLink to="react"><div className='exercises-module__ls'><img src={reactIcon} alt="htmlIcon" /><span>React</span></div></NavLink>
        </div>
      </div>
    </>
  );
};
