import React, { useState } from 'react';
// import './Slider.css';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlide);
  };

  const goToPreviousSlide = () => {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevSlide);
  };

  return (
    <div className="slider">
      <div className="slider-content">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            <img src={slide.image} alt={slide.caption} />
            <div className="caption">{slide.caption}</div>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button className="prev-btn" onClick={goToPreviousSlide}>
          Prev
        </button>
        <button className="next-btn" onClick={goToNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;