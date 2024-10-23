import React from 'react';
import './Bento.css';

function Bento() {
    return (
        <>
            <div className="bento-wrapper">
                <div className="bento-container">

                    {/* Main Hero Box */}
                    <div className="bento-box hero-box">
                        <div className="hero-content">
                            <div className="title-bar">
                                <div className="yellow-bar"></div>
                                <span className="subtitle">SUBJECT</span>
                            </div>
                            <h1 className="hero-title">
                                HERO TITLE
                            </h1>
                            <div className="hero-footer">
                                <button className="start-button">CTA Here</button>
                            </div>
                        </div>
                    </div>

                    {/* How is works */}
                    <div className="bento-box training-box">
                        <div className="training-content">
                            <h2 className="training-title">
                                How is works
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Landlord Box */}
            <div className="landlord-container">
                <div className="bento-box landlord">
                    <div className="landlord-content">
                        <h2 className="landlord-title">
                            Landlord Container
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bento;
