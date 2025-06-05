import React, { useEffect, useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust sensitivity
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sidebar">
      <ul>
        <li>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        </li>
        <li>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        </li>
        <li>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </li>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
