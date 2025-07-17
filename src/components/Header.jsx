// ===============================================
// HEADER.JSX - Composant d'en-tête avec navigation
// ===============================================

import React from 'react';
import {NavLink} from 'react-router-dom';
import logoRedImg from '../assets/logo_red.png';

/**
 * Composant Header avec logo et navigation
 * Utilise NavLink pour la navigation avec états actifs
 */

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                {/* Logo de l'application */}
                <img src={logoRedImg} alt="Logo Kasa" className="header__logo"/>

                <nav className="header__nav">
                    {/* Lien vers accueil - NavLink applique automatiquement la classe active */}
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive
                            ? 'header__link header__link--active'
                            : 'header__link'
                        }>
                        Accueil
                    </NavLink>

                    {/* Lien vers page à propos */}
                    <NavLink
                        to="/a-propos"
                        className={({isActive}) => isActive
                            ? 'header__link header__link--active'
                            : 'header__link'
                         }>
                        A Propos
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header