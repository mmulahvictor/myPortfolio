import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

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
