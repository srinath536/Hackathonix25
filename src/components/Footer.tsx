import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2 className="hackathon-title">Hackathonix 25</h2>
        
        
        <div className="contact-us">
          <h3>Contact Us:</h3>
          <p>Email: contact@company.com</p>
          <p>Phone: +1234567890</p>
        </div>

        
        <div className="team-members">
          <p>
            Built by{' '}
            <a href="https://www.linkedin.com/in/srinath-s-75b470288/" target="_blank" rel="noopener noreferrer">Srinath S</a> 
          </p>
        </div>

       
        <div className="social-media">
          <a href="https://www.instagram.com/yourinsta" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
        </div>

        
        <div className="college-info">
          <p><a href="https://github.com/srinath536" target="_blank" rel="noopener noreferrer" className="college-link">Github</a></p>
        </div>

        
        <div className="copyright-section">
          <p>&copy; 2024 All Rights Reserved. @Hackathonix</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
