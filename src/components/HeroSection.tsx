import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Video background */}
      <video className="hero-video" autoPlay loop muted>
        <source src="src/assets/hk251.mp4" type="video/mp4" />
      </video>

      {/* Overlay content */}
      <div className="hero-overlay">
        <h1> Hackathonix 25</h1>

        {/* Register Now button */}
        <button className="register-btn">Register Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
