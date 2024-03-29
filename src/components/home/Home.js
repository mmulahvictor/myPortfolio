import React, { useState, useEffect } from 'react';
import Slider from '../Slider';
import './home.css';

function Home ({slides}) {

  const [ showScroll, setShowScroll ] = useState( false );

  useEffect( () => {
    window.addEventListener( "scroll", () => {
      if ( window.pageYOffset > 100 )
      {
        setShowScroll( true );
      } else
      {
        setShowScroll( false );
      }
    } );
  }, [] );

  const scrollTop = () => {
    window.scrollTo( { top: 0, behavior: "smooth" } );
  };

  return (
    <div className="homepage">
      <Slider slides={slides} />
      <header className="header">
        <h1 className="title">Victor Mmulah</h1>
        <h2 className="subtitle">Full Stack Software Developer</h2>
      </header>
      <section className="about-me">
        <h3 className="section-title">About Me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
      <section className="skills">
        <h3 className="section-title">Skills</h3>
        <ul className="skill-list">
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>ReactJs</li>
          <li>Rails</li>
        </ul>
      </section>
      <section className="work-experience">
        <h3 className="section-title">Work Experience</h3>
        <div className="experience-item">
          <h4 className="position">IT Support at KALRO</h4>
          <p className="duration">Duration: [Duration]</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="experience-item">
          <h4 className="position">Software Developer at INNODEMS</h4>
          <p className="duration">Duration: [Duration]</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="experience-item">
          <h4 className="position">ICT Officer at Edutab Africa</h4>
          <p className="duration">Duration: [Duration]</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      <section className="contact">
        <h3 className="section-title">Get In Touch</h3>
        <p>Email: mmulahvictor@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/victor-mmulah-51666819b</p>
      </section>
      { showScroll && (
        <button className="scroll-top" onClick={ scrollTop }>
          Back to Top
        </button>
      ) }
    </div>
  );
}

export default Home;