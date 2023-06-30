import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import './Countdown.css';


const Countdown = () => {
  const [isCardFlipped, setCardFlipped] = useState(false);
  const [isCardSent] = useState(false);

  const handleCustomize = () => {
    setCardFlipped(true);
  };

 

  const handleClose = () => {
    setCardFlipped(false);
  };

  return (
 
    <div className="wrap">
      <div className="gift-card-box">
        {isCardSent && (
          <div className="confirmation visible">
            <svg
              className="all-good"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130.2 130.2"
            >
              <circle
                className="path circle"
                fill="none"
                stroke="#777"
                strokeWidth="6"
                strokeLinecap="round"
                strokeMiterlimit="10"
                cx="65.1"
                cy="65.1"
                r="62.1"
              />
              <polyline
                className="path check"
                fill="none"
                stroke="#777"
                strokeWidth="6"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="100.2,40.2 51.5,88.8 29.8,67.5"
              />
            </svg>
            <p className="success"></p>
          </div>
        )}

        <div className={`card ${isCardFlipped ? 'flip' : ''}`}>
          <div className="front">
            <div className="front-logo-cnt">
              <Tilt scale={1.1} speed={1000}>
                {/* Place your logo component or image here */}
                <p className="card-description">75 hard</p>
              </Tilt>
            </div>
          </div>

          <div className="back">
          <Tilt scale={1.1} speed={1000}>
            <p className="card-description">Day 1</p>
            </Tilt>
          </div>
        </div>
 
        <div className="button-cnt">
          {!isCardFlipped && (
            <button id="btn-card-flip" className="primary-cta" onClick={handleCustomize}>
              Show Your Score <FontAwesomeIcon icon={faFire} />
            </button>
          )}

          {isCardFlipped && (
            <>
              <button id="close" className="secondary-cta secondary-cta--done" onClick={handleClose}>
                Hide Score
              </button>
              
            </>
          )}
        </div>
        
      </div>
      
    </div>

  );
};

export default Countdown;
