import React from 'react';
import './About.css';
import designerImage from './images/ISP1_1195.png';  // Updated image path

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={designerImage} alt="Eric Uwanyagasani" />
        </div>
        <div className="about-text">
          <h2>Eric Uwanyagasani</h2>
          <h3>Graphic Designer & Illustrator</h3>
          <p>
            Hello! I'm Eric Uwanyagasani, a passionate graphic designer and illustrator with a keen eye for detail and a love for creative problem-solving. With years of experience in the field, I specialize in bringing ideas to life through vibrant, innovative designs that captivate and inspire.
          </p>
          <p>
            My journey in graphic design began with a fascination for the power of visual communication. Since then, I've honed my skills in various design software and techniques, always staying at the forefront of industry trends and technologies.
          </p>
          <p>
            Whether it's crafting brand identities, designing engaging marketing materials, or creating stunning illustrations, I approach each project with enthusiasm and dedication. My goal is to not just meet but exceed client expectations, delivering designs that are not only visually appealing but also strategically effective.
          </p>
          <p>
            When I'm not designing, you can find me exploring art galleries, experimenting with new design techniques, or seeking inspiration in the world around me. I believe that continuous learning and creative exploration are key to producing fresh, innovative work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;