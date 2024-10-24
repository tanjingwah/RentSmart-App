import React, { useEffect, useState } from 'react';
import './Carousell.css';

function Carousell() {
  const slides = ['slide one', 'slide two', 'slide three', 'slide four', 'slide five'];
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (totalSlides + 1)); // Adjust for seamless scrolling
    }, 3000); 
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Create a duplicated array for seamless scrolling
  const displaySlides = [slides[totalSlides - 1], ...slides, slides[0]]; // Duplicated for infinite loop

  return (
    <div className="main-container">
      <h1>WHY CHOOSE US?</h1>
      <div className="carousel">
        <div className="slides" style={{ transform: `translateX(-${(currentSlide * (100 / (totalSlides + 1)))}%)` }}>
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

export default Carousell;
