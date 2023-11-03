
import React from 'react';
import './App.css';

import {Routes, Route} from "react-router-dom";
import Home from './Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portofolio';
import Contact from './pages/Contact';
import Header from './components/header/header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
    <Footer />

    </>
  );
}

export default App;
