import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not_found">
      <h1 className="not_found_title">404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default NotFound;