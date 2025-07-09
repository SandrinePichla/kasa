import React from 'react';

import Header from './components/Header'; // On importe le composant Header
import Footer from './components/Footer';
import AppRouter from './components/AppRouter'; // On importe le composant AppRouter

function App() {
  return (   
    <div className="App">
      <Header /> {/* On insère ici le composant Header */}
      <main>
        <AppRouter />  {/**  J'appelles mon composant AppRouterici **/}
      </main>
      <Footer />
    </div>
   
  );
}

export default App;