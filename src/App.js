import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Sidebar /> {/* ✅ Always visible fixed nav on the left */}

      <main className="main-content"> 
        <Navbar />
<Hero />
        
        
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
