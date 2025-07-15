// ===============================================
// APPROUTER.JSX - Configuration du routage
// ===============================================

import React from 'react';
import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Logement from '../pages/Logement';
import NotFound from '../pages/NotFound';

/**
 * Configuration du routage de l'application
 * Définit toutes les routes disponibles
 */
function AppRouter() {
    return (
        <Routes>
            {/* Page d'accueil - route par défaut */}
            <Route path="/" element={<Home />}/>

            {/* Page à propos */}
            <Route path="/a-propos" element={<About />}/>
            
            {/* Page de détail d'un logement - :id est un paramètre dynamique */}           
            <Route path="/logement/:id" element={<Logement />}/>

            {/* Page 404 - attrape toutes les routes non définies */}
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
}
export default AppRouter;