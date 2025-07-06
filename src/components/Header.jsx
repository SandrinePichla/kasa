import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
       <img
        src={`${import.meta.env.BASE_URL}logo_large.png`}
        alt="Logo Kasa"
      />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;