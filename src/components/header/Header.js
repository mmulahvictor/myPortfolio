import React from 'react'
import './Header.css'
import Home from './Home'
import About from './About.js'

function Header() {
  return (
    <div className='header'>
      <h1>Victor Mmulah</h1>
      <Home />
      <About />
    </div>
  )
}

export default Header