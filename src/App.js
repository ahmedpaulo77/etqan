import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';
import Finishing from './pages/Finishing';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/finishing" element={<Finishing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      
      {/* تم تصليح إضافة <a لزرار الواتساب العائم هنا */}
      <a 
        href="https://wa.me/201000000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
        target="_blank"
        rel="noreferrer"
        className="wa-float"
      >
        <i className="ti ti-brand-whatsapp"></i>
      </a>
    </HashRouter>
  );
}

export default App;