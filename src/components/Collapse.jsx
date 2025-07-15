// ===============================================
// COLLAPSE.JSX - Composant menu déroulant réutilisable
// ===============================================

import React, {useState} from 'react';
import {FaChevronUp} from 'react-icons/fa';

/**
 * Composant Collapse menu déroulant réutilisable
 * @param {string} title - Titre de la section
 * @param {string|JSX} content - Contenu à afficher/masquer
 * @param {string} variant - Variante de style (about, logement, etc.)
 */
function Collapse({title, content, variant }) {
    // État isOpen = false, fonction setIsOpen pour changer l'état
    const [isOpen, setIsOpen] = useState(false);

    return (
        //Si variant existe, on ajoute "collapse--variant"
        <div className={`collapse${variant ? ` collapse--${variant}` : ''}`}>
            
             {/* header cliquable pour inverser le State */}
            <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
                
                <h2 className="collapse__title">{title}</h2>

                 {/* Icône chevron qui pivote selon l'état */}
                <FaChevronUp
                     className={`collapse__chevron${isOpen ? ' collapse__chevron--rotated' : ''}`}
                />
            </div>

            {/* Contenu qui s'affiche/masque scss  */}
            <div className={`collapse__content${isOpen ? ' collapse__content--open' : ''}`}>
                <div className="collapse__text">{content}</div>
            </div>
        </div>
    );
}

export default Collapse;