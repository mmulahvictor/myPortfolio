import React from 'react';
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
        <input type="text" name="" id="fname" placeholder='Your name...' />
        <input type="text" name="" id="lname" placeholder='Your last name...' />
        <input type="email" name="" id="email" placeholder='Your email...' />
        <input type="tel" name="" id="phone" placeholder='Your phone number...' />
        {/* <input type="submit" value="Submit" /> */}
      </form>
      <button class="button">
        SUbmit
      </button>
    </div>
  );
}

export default Contact;