import React from 'react';
import './Prizes.css';
import celebrationImage from '../assets/prize.svg'; // Ensure the correct path for your image

const Prizes = () => {
  return (
    <div className="prizes-container">
      <div className="prizes-text">
        <h2 className="prizes-title">Cash Pool</h2>
        <p className="prizes-description">
          Join us in this intergalactic adventure and compete for a prize pool worth ₹60,000! 🚀
        </p>
        <p className="prizes-details">
          Showcase your brilliance, tackle exciting challenges, and emerge as the winner.
          This is your opportunity to be celebrated among the stars. Let your creativity shine and be a part of this unforgettable hackathon!
        </p>
      </div>
      <div className="prizes-image-container">
        <img 
          src={celebrationImage} 
          alt="Celebrating Prize Pool" 
          className="prizes-image" 
        />
      </div>
    </div>
  );
};

export default Prizes;
