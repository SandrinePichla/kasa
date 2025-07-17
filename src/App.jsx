// ===============================================
// APP.JSX - Composant racine de l'application
// ===============================================

import React from 'react';

import Header from './components/Header'; // On importe le composant Header
import Footer from './components/Footer';
import AppRouter from './components/AppRouter'; // On importe le composant AppRouter

/**
 * Composant principal de l'application
 * Structure : Header fixe + Contenu dynamique + Footer fixe
 */

function App() {
    return (
        <div className="App">

            {/* Header avec navigation - affiché sur toutes les pages */}
            <Header/> 
            
            <main>

                {/**  J'appelle mon composant AppRouter ici **/                }
                <AppRouter/> 

            </main>
                
            {/* Footer - affiché sur toutes les pages */}
            <Footer/>
            
        </div>

    );
}

export default App;