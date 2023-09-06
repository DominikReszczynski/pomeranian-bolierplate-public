import React, { useState } from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';
import strzalka from '../Images/strzalka.svg';
import person from '../Images/user.svg'
import burger from '../Images/menu.svg'
import DominikProfile50 from '../Images/DominikProfile50.jpg';
export function AppHeader({ toggleMenuVis }) {
  const [userIsVisible, setUserIsVisible] = useState(false)

  return (
    <header className='header__header'>
      <button onClick={toggleMenuVis} className='menuButton'><img src={burger} alt="menu" /></button>
      <div className='logo'>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <button className='menuButton' onClick={() => setUserIsVisible(!userIsVisible)}><img src={person} alt="user menu" /></button>


      <div className={`menu ${userIsVisible ? "showMenu" : ""}`}>
        <div className="profile-picture">
          <img className="img-placeholder" src={DominikProfile50} alt="" />
        </div>
        <div className="user">
          <h3 className="header-name">Dominik</h3>
          <p>Kursant</p>
        </div>
        <img src={strzalka} alt="" />
      </div>
    </header>
  );
}
