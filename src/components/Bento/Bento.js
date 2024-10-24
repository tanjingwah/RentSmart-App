import React from 'react';
import './Bento.css';
import './DanglingFooter.css';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DanglingFooter from './DanglingFooter';

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
                                <span className="subtitle">Welcome to the Future of Home Rentals in Singapore!</span>
                            </div>
                            <h1 className="hero-title">
                                FIND YOUR PERFECT HOME IN SECONDS
                            </h1>
                            <p className='hero-para'>
                                Effortlessly connect with your ideal home. Our AI-powered platform matches tenants and landlords based on preferences and budget—no agents needed.
                            </p>
                            <DanglingFooter />
                        </div>
                    </div>

                    {/* How is works */}
                    <div className="bento-box training-box">
                        <div className="training-content">
                            
                            {/* <ArrowCircleRightIcon className="arrowIcon"/> */}

                            <h2 className="training-title">
                                HOW IT WORKS
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
