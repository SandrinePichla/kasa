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
            
             {/* header  */}
            <div className="collapse__header" >
                
                <h2 className="collapse__title">{title}</h2>

                 {/* Icône chevron cliquable pour inverser le State + qui pivote selon l'état */}
                <FaChevronUp
                     className={`collapse__chevron${isOpen ? ' collapse__chevron--rotated' : ''}`}
                     onClick={() => setIsOpen(!isOpen)}
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