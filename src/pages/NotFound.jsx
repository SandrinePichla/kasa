import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>Erreur 404</h1>
      <p>Page not found</p>
      <Link to="/">Retourner à l’accueil</Link>
    </div>
  );
}

export default NotFound;