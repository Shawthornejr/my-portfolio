import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'React Weather App',
      description: 'A simple app that shows weather info using a public API.',
      image: '/weather-app.png',
      link: 'https://github.com/Shawthornejr/weather-app'
    },
    {
      title: 'Portfolio Site',
      description: 'This very site! Built with React and deployed with GitHub Pages.',
      image: '/portfolio.png',
      link: 'https://github.com/Shawthornejr/my-portfolio'
    },
    {
      title: 'Task Tracker App',
      description: 'A React-based to-do list with add, delete, and mark-as-complete functionality.',
      image: '/task-tracker.png',
      link: 'https://github.com/Shawthornejr/task-tracker'
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up">
            <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
