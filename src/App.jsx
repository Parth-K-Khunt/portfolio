import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect'; // <--- IMPORT THIS

// Import CSS
import './styles/main.css'; 

function App() {
  return (
    <>
      {/* 1. REMOVE the old <div className="glitter-layer..."> lines */}
      
      {/* 2. ADD the new Background Effect here */}
      <BackgroundEffect />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  );
}

export default App;