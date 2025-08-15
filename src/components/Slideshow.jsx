// ===============================================
// SLIDESHOW.JSX - Composant carrousel d'images
// ===============================================

import {useState} from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'; // pour utiliser des icônes

/**
 * Composant Slideshow pour naviguer entre plusieurs images
 * @param {Array} pictures - Tableau d'URLs d'images
 */
function Slideshow({pictures}) {
    // On utilise useState pour stocker l'index de l'image actuellement affichée (initialement 0) 
    //
    const [currentIndex, setCurrentIndex] = useState(0);

    // Gestion du cas où aucune image n'est fournie
    if (!pictures || pictures.length === 0) {
        return <div className="slideshow__empty">Aucune image disponible</div>;
    }

    // Navigation vers l'image suivante (boucle à la fin)
    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % pictures.length);
    };

    // Navigation vers l'image précédente (boucle au début)
    const goToPrev = () => {
        setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="slideshow">
            {/* Image actuellement affichée */}
            <img
                src={pictures[currentIndex]}
                alt={`Image ${currentIndex + 1}`} // n° d'image pour l'accessibilité
                className="slideshow__image"
            /> 
                
                {/* Flèches et compteur affichés seulement s'il y a plusieurs images */}
                {pictures.length > 1 && (
                    <>   
                        {/* Bouton précédent */}                 
                        < button 
                            className = "slideshow__arrow slideshow__arrow--left" 
                            onClick = {goToPrev}
                            aria-label = "Image précédente"> 
                            <FaChevronLeft/>
                        </button>

                        {/* Bouton suivant */}
                        <button
                            className="slideshow__arrow slideshow__arrow--right"
                            onClick={goToNext}
                            aria-label="Image suivante">
                            <FaChevronRight/>
                        </button>

                        {/* Compteur d'images */}
                        <div className="slideshow__counter">
                            {currentIndex + 1} / {pictures.length}                         
                        </div>
                    </>
                )}            
        </div>
    );
}

export default Slideshow;
