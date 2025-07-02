import React from 'react';

function Header() {
  return (
    <header>
      <img src="/logo.png" alt="Logo Kasa" />
      <nav>
        <a href="/">Accueil</a>
        <a href="/a-propos">À propos</a>
      </nav>
    </header>
  );
}

export default Header;