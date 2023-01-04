import React from 'react';
import './skills.css'

function Skills () {
  return (
    <div>
      <p>
        Through out the years I have gained a lot of skills via bootcamps, projects and work environment.
      </p>
      <p>
        These are the skills that I am profecient in:
      </p>
      <div className='languages'>
        <h2>Languages</h2>
        <ul>
          <li>JavaScript</li>
          <li>Ruby</li>
        </ul>
      </div>
      <div>
        <h2>Fameworks</h2>
        <ul>
          <li>Rails</li>
          <li>React</li>
        </ul>
      </div>
      <div>
        <h2>Design</h2>
        <ul>
          <li>Figma</li>
        </ul>
      </div>
      <div>
        <h2>Projects</h2>
      </div>
    </div>
  );
}

export default Skills;