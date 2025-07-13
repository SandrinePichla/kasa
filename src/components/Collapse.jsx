import React, {useState} from 'react';
import {FaChevronUp} from 'react-icons/fa';

function Collapse({title, content, variant }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapse${variant ? ` collapse--${variant}` : ''}`}>

            <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>

                <h2 className="collapse__title">{title}</h2>

                <FaChevronUp
                     className={`collapse__chevron${isOpen ? ' collapse__chevron--rotated' : ''}`}
                />

            </div>

            <div
                className={`collapse__content${isOpen ? ' collapse__content--open' : ''}`}>

                <div className="collapse__text">{content}</div>

            </div>
        </div>
    );
}

export default Collapse;