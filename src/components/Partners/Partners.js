import React from 'react';
import './Partners.css';

function Carousell() {
  return (
    <div className="main-container">
      <h1>Partners Carousell</h1>
      {/* USP List */}
      <div className="scrollsnap-carousel" id="partnerCarousel">
        <div className="slide">
          <div className="content">
            <div className="content-wrapper">
              slide one
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <div className="content-wrapper">
              slide two
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <div className="content-wrapper">
              slide three
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <div className="content-wrapper">
              slide four
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousell;