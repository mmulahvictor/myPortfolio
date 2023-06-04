import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Blogs from './components/blogs/Blogs'
import AboutMe from './components/aboutMe/AboutMe';

function App() {
  const slides = [
    {
      image: 'https://dummyimage.com/600x400/000/fff',
      title: 'Slide 1',
      description: 'Description for Slide 1',
    },
    {
      image: 'https://dummyimage.com/600x400/000/fff',
      title: 'Slide 2',
      description: 'Description for Slide 2',
    },
    {
      image: 'https://dummyimage.com/600x400/000/fff',
      title: 'Slide 3',
      description: 'Description for Slide 3',
    },
  ];
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home slides={slides} />} />
        <Route path='/about' element={ <AboutMe /> } />
        <Route path='/blogs' element={ <Blogs /> } />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
