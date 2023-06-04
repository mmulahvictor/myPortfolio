import React, { useState } from 'react';
import './style/slider.css';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
    
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
      <button className="prev-button" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;