import React from 'react';
import './HeroSection.css';
import heroVideo from '../assets/bg3.mp4'; 


const HeroSection: React.FC = () => {
  const googleFormURL = "https://forms.gle/your-google-form-link";  

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
        <a href={googleFormURL} target="_blank" rel="noopener noreferrer">
          <button className="register-btn">Register Now</button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
