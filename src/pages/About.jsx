// ===============================================
// ABOUT.JSX - Page à propos
// ===============================================

import React from 'react';
import Banner from '../components/Banner';
import bannerAboutImg from '../assets/banner_about.png';
import Collapse from '../components/Collapse';

/**
 * Page à propos - Présente les valeurs de l'entreprise
 */
function About() {
    return (
        <main className="about">
            {/* Bannière sans texte */}
            <Banner image={bannerAboutImg}/>

            {/* Grille des sections avec menu déroulant */}
            <div className="about__grid">
                {/* Section Fiabilité */}
                <Collapse
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." 
                    variant="about"/>

                {/* Section Respect */}    
                <Collapse
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
                    variant="about"/>

                {/* Section Service */}    
                <Collapse
                    title="Service"
                    content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance. " 
                    variant="about"/>

                    
                {/* Section Sécurité */}
                <Collapse
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
                    variant="about"/>
            </div>
        </main>
    );
}

export default About;