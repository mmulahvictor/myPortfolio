import React from 'react';
import Footer from '../footer/Footer';
import './contact.css';

function Contact () {
  return (
    <div>
      <h3>Got a question?</h3>
      <h1>Contact Me</h1>
      <p>
        I am here to help and answer any question you might have. I look forward to hearing from you.
      </p>
      <h1>&#128578;</h1>
      <form className='container'>
        <input type="text" name="" id="fname" placeholder='Your first name...' required />
        <input type="text" name="" id="lname" placeholder='Your last name...' required />
        <input type="email" name="" id="email" placeholder='Your email...' required />
        <input type="tel" name="" id="phone" placeholder='Your phone number...' required />
        <input type="submit" value="Submit" />
      </form>
      <Footer />
    </div>
  );
}

export default Contact;