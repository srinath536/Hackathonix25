import React from 'react';
import './Footer.css'; // Import the footer-specific CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Hackathonix 25 &copy; All Rights Reserved</p>
        <div className="social-links">
          <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">F</a>
          <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">T</a>
          <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">L</a>
          <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">I</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
