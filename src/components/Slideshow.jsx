import React, {useState} from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'; // si tu utilises des icônes

function Slideshow({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!pictures || pictures.length === 0) {
        return <div className="slideshow__empty">Aucune image disponible</div>;
    }

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % pictures.length);
    };

    const goToPrev = () => {
        setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="slideshow">
            <img
                src={pictures[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="slideshow__image"
            /> 
                
                {pictures.length > 1 && (
                    <>                    
                    < button 
                    className = "slideshow__arrow slideshow__arrow--left" 
                    onClick = {goToPrev}
                    aria-label = "Image précédente" 
                    > 
                        <FaChevronLeft/>
                    </button>

                    <button
                        className="slideshow__arrow slideshow__arrow--right"
                        onClick={goToNext}
                        aria-label="Image suivante"
                    >
                        <FaChevronRight/>
                    </button>

                    <div className="slideshow__counter">
                            {currentIndex + 1} / {pictures.length}                         
                    </div>
                </>
                )}            
        </div>
    );
}

export default Slideshow;
