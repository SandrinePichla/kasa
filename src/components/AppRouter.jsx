import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Logement from '../pages/Logement';
import NotFound from '../pages/NotFound'; 

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default AppRouter;