import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <img
        className="hero-image"
        src="src/assets/hc25.png"
        alt="Hackathonix Hero Background"
      />
      <div className="hero-overlay">
        <h1>Hackathonix 25</h1>
        <p>"Innovation starts here-build ideas, inspire change, and shape what's to come."</p>
        <button className="register-btn">Register Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
