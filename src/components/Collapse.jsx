import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">

      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>

        <h2 className="collapse__title">{title}</h2>

        <FaChevronUp className={isOpen ? 'chevron rotate' : 'chevron'} />
      
      </div>

      <div className={isOpen ? 'collapse__content open' : 'collapse__content'}>

        <p className='collapse__text'>{content}</p>
        
      </div>
    </div>
  );
}

export default Collapse;