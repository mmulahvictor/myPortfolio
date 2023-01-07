import React from 'react';
import Footer from '../footer/Footer';
import './skills.css';

function Skills () {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        <h2>Sendit Courrier Service</h2>
        <img src="../../assets/sendit.png" alt="Sendit" />
        <p>
          We are a transportation service in Kenya that create a robust business model. Delivering to all over the world through our effective supply chain, use of modern technologies like geomapping , tracking , and autonomous technologies
        </p>
      </div>
      <div>
        <h2>Safety Boda</h2>
        <img src="../../assets/bodaa.png" alt="Safety Bodaa" />
        <p>
          A web application to increase passenger safety when utilizing bodaboda services. It collects all data related to the service to secure us.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;