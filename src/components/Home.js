import React from 'react';
import './Style.css'

function Home () {
  return (
    <div className='home'>
      <div className='header'>
        <h1>Victor Mmulah</h1>
        <h2>Software Engineer/IT Officer</h2>
      </div>
      <div className='home-msg'>
        
        <p>
          I am a software engineer with a passion for building scalable and maintainable software. I am currently working as an IT Officer at <a href="https://edutab.africa">Edutab Africa</a>
        </p>
        <hr />
        <p>
          Interested in emerging technologies and how they can be used to solve real world problems. I am also a big fan of open source software and I am always looking for ways to contribute to the community.
        </p>
      </div>
    </div>
  );
}

export default Home;