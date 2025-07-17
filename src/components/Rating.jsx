// ===============================================
// RATING.JSX - Composant d'affichage des notes
// ===============================================

import React from 'react';
import {FaStar} from "react-icons/fa";

/**
 * Composant Rating pour afficher les étoiles de notation
 * @param {string} rating - Note sur 5 (format string)
 */
function Rating({rating}) {
    const totalStars = 5;
    const ratingNumber = parseInt(rating, 10); // Conversion string en nombre

    return (
        <div className="rating">
            {
                // Génère un tableau de 5 étoiles
                [...Array(totalStars)].map((_, index) => (
                    <FaStar
                        key={index}
                        // Étoile remplie si index < note, vide sinon
                        className={index < ratingNumber
                            ? "rating__star rating__star--filled"
                            : "rating__star"
                        }/>
                ))
            }
        </div>
    );
}

export default Rating;
