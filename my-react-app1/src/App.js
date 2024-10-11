import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import designerImage from './images/ISP1_1195.png';  // Updated image path
import projectImage from './images/Lunch hour at vella coffee-Recovered.png';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import AnimatedRoute from './AnimatedRoute';

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <AnimatedRoute>
              <main>
                <section className="hero">
                  <div className="designer-image">
                    <img src={designerImage} alt="Graphic Designer" />
                  </div>
                  <h1>Eric Uwanyagasani</h1>
                  <h2>Graphic Designer & Illustrator</h2>
                  <p>Bringing your ideas to life with vibrant designs</p>
                  <Link to="/projects" className="cta-button">View My Work</Link>
                 <p></p> <Link to="/Contact" className="hire-button">Hire Me</Link>
                </section>

                <section className="featured-work">
                  <h3>Featured Projects</h3>
                  <div className="project-grid">
                    <div className="project-item">
                      <img src={projectImage} alt="Lunch hour at Vella Coffee" />
                      <h4>Vella Coffee Illustration</h4>
                    </div>
                    <div className="project-item">
                      <img src={projectImage} alt="Coffee Shop Ambience" />
                      <h4>Coffee Shop Ambience</h4>
                    </div>
                    <div className="project-item">
                      <img src={projectImage} alt="Vella Coffee Branding" />
                      <h4>Vella Coffee Branding</h4>
                    </div>
                    <div className='project-item'>
                      <img src={projectImage} alt="Vella Coffee Delicious" />
                      <h4>Vella Coffee Delicious</h4>
                    </div>
                  </div>
                </section>
              </main>
            </AnimatedRoute>
          } />
          <Route path="/projects" element={
            <AnimatedRoute>
              <Projects />
            </AnimatedRoute>
          } />
          <Route path="/about" element={
            <AnimatedRoute>
              <About />
            </AnimatedRoute>
          } />
          <Route path="/contact" element={
            <AnimatedRoute>
              <Contact />
            </AnimatedRoute>
          } />
        </Routes>
      </AnimatePresence>

      <footer>
        <p>&copy; 2024 Eric Uwanyagasani Graphic Design. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;