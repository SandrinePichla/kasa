// ===============================================
// BANNER.JSX - Composant bannière réutilisable
// ===============================================

import React from 'react';

/**
 * Composant Banner réutilisable
 * @param {string} image - URL de l'image de fond
 * @param {string} text - Texte à afficher (optionnel)
 */
function Banner({image, text}) {
    return (
        <div
            className="banner"
            style={{
                // Image de fond dynamique passée en props
                backgroundImage: `url(${image})`
            }}>
                {/* Affichage conditionnel du texte */}
            {text && <h1 className="banner__text">{text}</h1>}
        </div>
    );
}

export default Banner;