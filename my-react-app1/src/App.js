import React from 'react';
import './App.css';
import designerImage from './images/ISP_1195_BL.jpg';
import projectImage from './images/Lunch hour at vella coffee-Recovered.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <div className="designer-image">
            <img src={designerImage} alt="Graphic Designer" />
          </div>
          <h1>Eric Kappy</h1>
          <h2>Graphic Designer & Illustrator</h2>
          <p>Bringing your ideas to life with vibrant designs</p>
          <a href="#portfolio" className="cta-button">View My Work</a>
        </section>
        
        <section className="featured-work">
          <h3>Featured Projects</h3>
          <div className="project-grid">
            <div className="project-item">
              <img src={projectImage} alt="Lunch hour at Vella Coffee" />
              <h4>Vella Coffee Illustration</h4>
            </div>
            <div className="project-item">
              <img src={projectImage} alt="Lunch hour at Vella Coffee" />
              <h4>Coffee Shop Ambience</h4>
            </div>
            <div className="project-item">
              <img src={projectImage} alt="Lunch hour at Vella Coffee" />
              <h4>Vella Coffee Branding</h4>
            </div>
          </div>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2024 Eric Kappy Graphic Design. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;