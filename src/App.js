import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Service from './components/Service';

import './App.css';

function App() {
  return (
    <div className="bg-gray-900 text-white">
     <Navbar />
     <Hero />
     <About />
    
     <Projects />
     <Contact />
     <Service/>
     <Footer />
    </div>
  );
}

export default App;
