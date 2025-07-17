// ===============================================
// HOME.JSX - Page d'accueil
// ===============================================

import React from 'react';
import logements from '../data/logements.json';
import Banner from '../components/Banner';
import bannerHomeImg from '../assets/banner_home.png';
import Card from '../components/Card';

/**
 * Page d'accueil - Affiche tous les logements disponibles
 */
function Home() {
    return (
        <main className="home">
            
            {/* Passage des props avec des valeurs */}
            <Banner 
                image={bannerHomeImg} 
                text="Chez vous, partout et ailleurs"
            />

            {/* Grille des logements */}
            <div className="home__grid">
                
                {/* Parcourt tous les logements et génère une Card pour chacun*/}
                {logements.map((logement) => (
                        <Card
                            key={logement.id} // Clé unique pour React
                            id={logement.id} // Id pour le composant
                            title={logement.title}
                            cover={logement.cover}
                        />
                    ))
                }
            </div>
        </main>
    );
}

export default Home;