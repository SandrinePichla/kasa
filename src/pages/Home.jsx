import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../data/logements.json';
import Banner from '../components/Banner';
import bannerImg from '../assets/banner.png'; 


function Home() {
  return (
    <main className="home_container">
      <Banner image={bannerImg} text="Chez vous, partout et ailleurs" />
       <div className="home_grid">
        {logements.map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id} className="card">
            <img src={logement.cover} alt={logement.title} className="card__img" />
            <h2 className="card__title">{logement.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;