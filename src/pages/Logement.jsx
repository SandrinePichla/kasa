import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import logements from '../data/logements.json'; // Ton fichier JSON
import { Navigate } from 'react-router-dom';

function Logement() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const logement = logements.find((logement) => logement.id === id);

 if (!logement) {
  return <Navigate to="/404" />; // ou autre page d’erreur personnalisée
}

 const formatHostName = (name) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      const firstName = names[0];
      const lastName = names.slice(1).join(' ');
      return { firstName, lastName };
    }
    return { firstName: name, lastName: '' };
  };

  const { firstName, lastName } = formatHostName(logement.host.name);


  return (
    <main className="logement">
      <Slideshow pictures={logement.pictures} />

      <section className="logement__header">
        <div className="logement__info">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <ul className="logement__tags">
            {logement.tags.map((tag, index) => (
              <li key={index} className="logement__tag">{tag}</li>
            ))}
          </ul>
        </div>

        <div className="logement__host-rating">        
        <div className="logement__host">
           <div className="logement__host-name">
              <span className="logement__host-firstname">{firstName}</span>
              <span className="logement__host-lastname">{lastName}</span>
            </div>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="logement__host-picture"
          />
        </div>
          <Rating rating={logement.rating} />        
        </div>
      </section>

      <section className="logement__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </section>
    </main>
  );
}

export default Logement;