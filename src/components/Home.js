import React from 'react';
import './Style.css'

function Home () {
  return (
    <div className='home'>
      <div>
        <img className='victor' src="https://pbs.twimg.com/profile_images/1427905585945759755/WOq64RxB_400x400.jpg" alt="Victor Mmulah" />
      </div>
      <div className='home-msg'>
        <h1>Victor Mmulah</h1>
        <h2>Software Engineer</h2>
        <p>
          I am a software engineer with a passion for building scalable and maintainable software. I am currently working as a software engineer at <a href="https://innodems.org/">INNODEMS</a> where I work on the <a href="https://innodems.org/">INNODEMS</a> product.
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