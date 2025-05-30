import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
  <div className="logo-container">
   <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo-img" />

    <h1 className="logo-text">Samuel Hawthorne</h1>
  </div>

  <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
    <li><a href="#about" onClick={closeMenu}>About</a></li>
    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
  </ul>

  <button className="mobile-menu-icon" onClick={toggleMenu}>
    <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
  </button>
</nav>
  );
}

export default Navbar;


