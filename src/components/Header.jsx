import React from 'react';
import { NavLink } from 'react-router-dom';
import logoRedImg from '../assets/logo_red.png';

function Header() {
  return (
     <header className="header">
       <div className="header__container">
          <img
            src={logoRedImg} 
            alt="Logo Kasa"
            className="header__logo"
          />
          <nav className="header__nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'header__link header__link--active' : 'header__link'
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/a-propos"
              className={({ isActive }) =>
                isActive ? 'header__link header__link--active' : 'header__link'
              }
            >
              A Propos
            </NavLink>
          </nav>
      </div>
    </header>
  )
}

export default Header