// ===============================================
// APP.JSX - Layout de l'application
// ===============================================

import Header from './components/Header'; 
import Footer from './components/Footer';
import AppRouter from './components/AppRouter'; 

/**
 * Composant principal de l'application
 * Structure fixe du site
 */

function App() {
    return (
        <div className="App">
            
            <Header/> 
            
            <main>

                {/**  afficher la page en fonction de l’URL **/}
                <AppRouter/> 

            </main>                
           
            <Footer/>
            
        </div>

    );
}

export default App;