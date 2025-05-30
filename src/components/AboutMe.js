import React from 'react';
import './AboutMe.css'; // Import the CSS file for styling

function AboutMe() {
  return (
    <section className="about-me">
    <img 
  src={`${process.env.PUBLIC_URL}/profile.jpg`} 
  alt="Profile of Samuel Hawthorne"
  className="about-me__image"
/>
      <div className="about-me__text">
        <h2>Hi, I'm Samuel Hawthorne</h2>
        <p>
          I’m an aspiring front-end developer with a passion for building clean,
          user-friendly web applications using React. I'm looking for my first
          role as a junior developer where I can grow and contribute to a great team.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
