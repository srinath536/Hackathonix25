import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


// Add the social media links and the team members' LinkedIn profiles
const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Hackathonix 25 Title at the Top */}
        <h2 className="hackathon-title">Hackathonix 25</h2>
        
        {/* Contact Us Section */}
        <div className="contact-us">
          <h3>Contact Us:</h3>
          <p>Email: contact@company.com</p>
          <p>Phone: +1234567890</p>
        </div>

        {/* Built By Info */}
        <div className="team-members">
          <p>
            Built by{' '}
            <a href="https://www.linkedin.com/in/srinath-s-75b470288/" target="_blank" rel="noopener noreferrer">Srinath S</a> 
            &
            <a href="https://www.linkedin.com/in/karthikeyan-r-14804a32b/" target="_blank" rel="noopener noreferrer">Karthikeyan</a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="social-media">
          <a href="https://www.instagram.com/yourinsta" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
        </div>

        {/* KCG College Info Section */}
        <div className="college-info">
          <p><a href="https://kcgcollege.ac.in/" target="_blank" rel="noopener noreferrer" className="college-link">KCG College of Technology</a></p>
        </div>

        {/* All Rights Reserved */}
        <div className="copyright-section">
          <p>&copy; 2024 All Rights Reserved. @kcgitdepartment</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
