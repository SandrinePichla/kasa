import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import bannerAboutImg from '../assets/banner_about.png'; 

function About() {
  return (
    <main className="about_container">
      <Banner image={bannerAboutImg}/>
       <div className="about_grid">
        
      </div>
    </main>
  );
}

export default About;