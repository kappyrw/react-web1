import React from 'react';
import { Link } from 'react-router-dom';
import projectImage from './images/Lunch hour at vella coffee-Recovered.png';

function Projects() {
  return (
    <div className="projects-page">
      <header>
        <h1>My Projects</h1>
        <Link to="/" className="back-button">Back to Home</Link>
      </header>
      <div className="project-grid">
        <div className="project-item">
          <img src={projectImage} alt="Lunch hour at Vella Coffee" />
          <h2>Vella Coffee Illustration</h2>
          <p>A vibrant illustration capturing the essence of lunch hour at Vella Coffee.</p>
        </div>
        <div className="project-item">
          <img src={projectImage} alt="Coffee Shop Ambience" />
          <h2>Coffee Shop Ambience</h2>
          <p>An atmospheric design showcasing the cozy ambience of a modern coffee shop.</p>
        </div>
        <div className="project-item">
          <img src={projectImage} alt="Vella Coffee Branding" />
          <h2>Vella Coffee Branding</h2>
          <p>A comprehensive branding project for Vella Coffee, including logo and packaging design.</p>
        </div>
        {/* Add more project items as needed */}
      </div>
    </div>
  );
}

export default Projects;