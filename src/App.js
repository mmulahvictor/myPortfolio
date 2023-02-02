import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Blogs from './components/blogs/Blogs'
import AboutMe from './components/aboutMe/AboutMe';

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about-me' element={ <AboutMe /> } />
        <Route path='/blogs' element={ <Blogs /> } />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
