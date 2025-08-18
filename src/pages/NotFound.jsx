// ===============================================
// NOTFOUND.JSX - Page d'erreur 404
// ===============================================

import {Link} from 'react-router-dom';

/**
 * Page 404 - Affichée quand une route n'existe pas
 */
function NotFound() {
    return (
        <div className="not-found">
            
            <h1 className="not-found__title">404</h1>
            
            <p className="not-found__text">Oups! La page que vous demandez n'existe pas.</p>
            
            <Link to="/" className="not-found__link">Retourner sur la page d’accueil</Link>
        </div>
    );
}

export default NotFound;