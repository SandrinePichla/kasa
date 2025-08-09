// ===============================================
// LOGEMENT.JSX - Page de détail d'un logement
// ===============================================

import {useParams} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import logements from '../data/logements.json'; // Ton fichier JSON

/**
 * Page de détail d'un logement spécifique
 * Récupère l'ID depuis l'URL et affiche les informations correspondantes
 */
function Logement() {
    // Récupération de l'ID depuis les paramètres d'URL
    const {id} = useParams();

     // Recherche du logement correspondant à l'ID
    const logement = logements.find((logement) => logement.id === id);

    // Redirection vers 404 si le logement n'existe pas
    if (!logement) {
        return <Navigate to="/404" replace/>; /// Redirige vers la route 404
    }

    /**
     * Fonction utilitaire pour séparer prénom et nom
     * @param {string} name - Nom complet de l'hôte
     * @returns {Object} - {firstName, lastName}
     */
    const formatHostName = (name) => {
        const names = name.split(' '); //La méthode split(' ') découpe la chaîne à chaque espace, et crée un tableau de mots
        if (names.length >= 2) { // Si le nom contient plusieurs mots                       
            const firstName = names[0]; // Prend le premier mot comme prénom 
            const lastName = names.slice(1).join(' '); // et le reste comme nom de famille slice(1) prend tous les mots sauf le premier join(' ') les recompose en une chaîne avec des espaces
            return {firstName, lastName}; //On renvoie un objet avec le prénom et le nom 
        }
        return {firstName: name, lastName: ''}; //Sinon, si le nom complet ne contient qu’un seul mot On considère que tout est le prénom, Le nom de famille reste vide ("")
    };

    // Extraction du prénom et nom de l'hôte
    const {firstName, lastName} = formatHostName(logement.host.name);

    return (
        <main className="logement">

            {/* Carrousel d'images */}
            <Slideshow pictures={logement.pictures}/>

            {/* En-tête avec infos principales */}
            <section className="logement__header">
                <div className="logement__info">

                    {/* Titre du logement */}
                    <h1 className="logement__title">{logement.title}</h1>

                    {/* Localisation */}
                    <p className="logement__location">{logement.location}</p>

                    {/* Tags/catégories */}
                    <ul className="logement__tags">
                        {logement.tags.map((tag, index) => (
                            <li key={index} className="logement__tag">{tag}</li>
                        ))}
                    </ul>
                </div>

                {/* Section hôte et notation */}
                <div className="logement__host-rating">

                    {/* Informations de l'hôte */}
                    <div className="logement__host">
                        <div className="logement__host-name">
                            <span className="logement__host-firstname">{firstName}</span>
                            <span className="logement__host-lastname">{lastName}</span>
                        </div>

                        <img
                            src={logement.host.picture}
                            alt={logement.host.name}
                            className="logement__host-picture"/>
                    </div>

                    {/* Notation en étoiles */}
                    <Rating rating={logement.rating}/>
                    
                </div>
            </section>

            {/* Sections détaillées avec menu déroulant */}
            <section className="logement__collapses">
                {/* Description du logement */}
                <Collapse 
                    title="Description" 
                    content={logement.description} 
                    variant="logement"/>

                {/* Liste des équipements */}    
                <Collapse
                    title="Équipements"
                    content={
                        <ul> 
                            {logement.equipments.map((equipement, index) => (
                                <li key={index}>{equipement}</li>
                            ))}                    
                        </ul>
                } 
                variant="logement"/>
            </section>
        </main>
    );
}

export default Logement;