import React from 'react';
import './HeroSection.css';
import heroVideo from '../assets/bg2.mp4'; 

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay">
        <h1>Hackathonix 25</h1>
        <p>"Innovation starts here - build ideas, inspire change, and shape what's to come."</p>
        <button className="register-btn">Register Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
