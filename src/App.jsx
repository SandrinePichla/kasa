import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import Header from './components/Header'; // On importe le composant
import Footer from './components/Footer';
import AppRouter from './components/AppRouter';

import './styles/main.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* On insère ici le composant */}
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;npm install