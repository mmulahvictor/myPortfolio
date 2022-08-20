import React from 'react';
import './Style.css'

function Home () {
  return (
    <div className='home'>
      <div>
        <img className='victor' src="../assets/IMG-20220630-WA0019.jpg" alt="Victor Mmulah" />
      </div>
      <div className='home-msg'>
        <h1>Victor Mmulah</h1>
        <h2>Software Engineer</h2>
        <p>
          I am a software engineer with a passion for building scalable and maintainable software. I am currently working as a software engineer at <a href="https://www.zebra.com/us/en.html">Zebra Technologies</a> where I work on the <a href="https://www.zebra.com/us/en/products/software/zebra-workspace.html">Zebra Workspace</a> product.
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