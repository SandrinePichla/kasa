// ===============================================
// FOOTER.JSX - Composant de pied de page
// ===============================================

import React from 'react';
import logoWhiteImg from '../assets/logo_white.png';

/**
 * Composant Footer statique
 * Affiche logo blanc et copyright
 */
function Footer() {
    return (
        <footer className="footer">
            {/* Logo blanc pour le footer */}
            <img className="footer__logo" src={logoWhiteImg} alt="Logo Kasa"/>

            {/* Texte de copyright */}
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;