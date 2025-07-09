import React from 'react';
import logoWhiteImg from '../assets/logo_white.png';


function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo"
        src={logoWhiteImg}
        alt="Logo Kasa"
      />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;