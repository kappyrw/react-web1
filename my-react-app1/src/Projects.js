import React from 'react';
import projectImage from './images/Lunch hour at vella coffee-Recovered.png';
import './Projects.css';

function Projects() {
  return (
    <main className="projects-page">
      <h1>My Projects</h1>
      <div className="project-grid">
        <div className="project-item">
          <img src={projectImage} alt="Lunch hour at Vella Coffee" />
          <h4>Vella Coffee Illustration</h4>
          <p>A detailed illustration capturing the vibrant atmosphere of Vella Coffee during lunch hour.</p>
        </div>
        <div className="project-item">
          <img src={projectImage} alt="Coffee Shop Ambience" />
          <h4>Coffee Shop Ambience</h4>
          <p>An artistic representation of the cozy and inviting ambience found in modern coffee shops.</p>
        </div>
        <div className="project-item">
          <img src={projectImage} alt="Vella Coffee Branding" />
          <h4>Vella Coffee Branding</h4>
          <p>A comprehensive branding project for Vella Coffee, including logo design and visual identity.</p>
        </div>
        <div className="project-item">
          <img src={projectImage} alt="Vella Coffee Delicious" />
          <h4>Vella Coffee Delicious</h4>
          <p>A mouthwatering illustration showcasing the delicious offerings at Vella Coffee.</p>
        </div>
      </div>
    </main>
  );
}

export default Projects;
