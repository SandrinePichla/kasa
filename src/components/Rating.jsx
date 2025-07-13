import React from 'react';
import {FaStar} from "react-icons/fa";

function Rating({rating}) {
    const totalStars = 5;
    const ratingNumber = parseInt(rating, 10); // Conversion en nombre

    return (
        <div className="rating">
            {
                [...Array(totalStars)].map((_, index) => (
                    <FaStar
                        key={index}
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
