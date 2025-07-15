// ===============================================
// CARD.JSX - Composant carte pour les logements
// ===============================================

import {Link} from 'react-router-dom';

/**
 * Composant Card pour afficher un logement
 * Cliquable - redirige vers la page de détail
 * @param {string} id - ID unique du logement
 * @param {string} title - Titre du logement
 * @param {string} cover - URL de l'image de couverture
 */
function Card({id, title, cover}) {
    return (
       
        // Link vers la page de détail du logement
        <Link to={`/logement/${id}`} className="card">
            
            {/** Photo du logement **/}
            <img src={cover} alt={title} className="card__img"/>

             {/* Titre du logement */}
            <div className="card__title">{title}</div>
        </Link>
    );
}

export default Card;