import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 All Rights Reserved.</p>
        <div className="contact-us">
          <h3>Contact Us:</h3>
          <p>Email: contact@company.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
