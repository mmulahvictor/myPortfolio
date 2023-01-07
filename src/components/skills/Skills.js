import React from 'react';
import Footer from '../footer/Footer';
import './skills.css';

function Skills () {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        <h2>Project 1</h2>
        <img src="/project1.png" alt="Screenshot of Project 1" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          elementum dui at dui placerat, at ornare diam finibus.
        </p>
      </div>
      <div>
        <h2>Project 2</h2>
        <img src="/project2.png" alt="Screenshot of Project 2" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          elementum dui at dui placerat, at ornare diam finibus.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;