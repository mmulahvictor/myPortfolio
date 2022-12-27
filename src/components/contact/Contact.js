import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div>
      <h3>Got a question?</h3>
      <h1>Contact Me</h1>
      <p>
        I am here to help and answer any question you might have. I look forward to hearing from you.
      </p>
      <h1>&#128578;</h1>
      <form action="">
        <label htmlFor="fname">First Name</label>
        <input type="text" name="" id="fname" placeholder='Your name...' />
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="" id="lname" placeholder='Your last name...' />
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" placeholder='Your email...' />
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" name="" id="phone" placeholder='Your phone number...' />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Contact