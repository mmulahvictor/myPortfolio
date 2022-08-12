import React from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import Education from './components/header/Education';
import Skills from './components/header/Skills';
import Contact from './components/header/Contact';
import {Route, Routes} from 'react-router-dom'
import Home from './components/header/Home';

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Education />} />
        <Route path='/education' element={<Skills />} />
        <Route path='/skills' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
