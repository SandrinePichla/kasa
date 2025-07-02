import React from 'react';
import logements from './data/logements.json';
import Header from './components/Header'; // On importe le composant

function App() {
  return (
    <div>
      <Header /> {/* On insère ici le composant */}
      <h1>Liste des logements</h1>
      <ul>
        {logements.map((logement) => (
          <li key={logement.id}>{logement.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;