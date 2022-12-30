import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
