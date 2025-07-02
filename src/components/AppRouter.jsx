import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Logement from '../pages/Logement';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<div>Oups! Cette page n'existe pas.</div>} />
    </Routes>
  );
}

export default AppRouter;