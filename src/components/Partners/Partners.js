import React, { useEffect, useState } from 'react';
import './Partners.css';

function PartnersCarousel() {
  const slides = ['slide one', 'slide two', 'slide three', 'slide four', 'slide five'];
  const [currentSlide, setCurrentSlide] = useState(1); // Start at the first actual slide
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (totalSlides + 2)); // +2 for duplicated slides
    }, 3000); 
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Create a duplicated array for seamless scrolling
  const displaySlides = [slides[totalSlides - 1], ...slides, slides[0]]; // Duplicated for infinite loop

  return (
    <div className="main-container">
      <h1>OUR PARTNERS</h1>
      <div className="carousel">
        <div className="slides" style={{ transform: `translateX(-${(currentSlide * (100 / (totalSlides + 2)))}%)` }}>
          {displaySlides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="content">
                <div className="content-wrapper">{slide}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnersCarousel;
