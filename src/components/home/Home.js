import React from 'react';
import './home.css';

function Home () {
  return (
    <div className='home'>
      <div className='header'>
        <img src="https://raw.githubusercontent.com/mmulahvictor/myPortfolio/main/src/assets/IMG-20220630-WA0019.jpg" alt="Victor's avatar" />
        <h1>Victor Mmulah</h1>
        <h2>Software Engineer/IT Officer</h2>
      </div>
      <div className='home-msg'>
        <img src="https://raw.githubusercontent.com/mmulahvictor/myPortfolio/main/src/assets/IMG-20220630-WA0019.jpg" alt="Victor" />
        <div className='body'>
          <h4>Discover</h4>
          <h2>About Me</h2>
          <p>
            I am a software engineer based in Kakamega, Kenya and I am very passionate and dedicated to my work. With 3 years experience I am a professional full stack developer. I have acquired the skills necessary to build great and premium websites and softwares.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Home;