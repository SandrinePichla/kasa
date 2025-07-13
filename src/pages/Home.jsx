import React from 'react';
import {Link} from 'react-router-dom';
import logements from '../data/logements.json';
import Banner from '../components/Banner';
import bannerHomeImg from '../assets/banner_home.png';
import Card from '../components/Card';

function Home() {
    return (
        <main className="home">
            <Banner image={bannerHomeImg} text="Chez vous, partout et ailleurs"/>
            <div className="home__grid">
                {
                    logements.map((logement) => (
                        <Card
                            key={logement.id}
                            id={logement.id}
                            title={logement.title}
                            cover={logement.cover}/>
                    ))
                }
            </div>
        </main>
    );
}

export default Home;