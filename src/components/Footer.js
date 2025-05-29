import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Samuel Hawthorne. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/Shawthornejr" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:samuelrhawthorne32@gmail.com">Email Me</a>
        <a href="https://www.linkedin.com/in/samuel-hawthorne-375936368/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="/resume.pdf" download>
          Resume
        </a>
      </div>
    </footer>
  );
}

export default Footer;

