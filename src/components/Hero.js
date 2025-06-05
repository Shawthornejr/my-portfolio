// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-name">Samuel Hawthorne</p>
        <h1 className="hero-title">
          WEB <span className="plus">+</span> Developer <br />
          <span className="plus">+</span> Designer
        </h1>
        <a href="#projects" className="hero-cta">View My Work ↓</a>
      </div>
    </section>
  );
}

export default Hero;
