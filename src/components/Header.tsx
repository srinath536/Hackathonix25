import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const calculateCountdown = () => {
    const eventDate = new Date("February 27, 2025 00:00:00").getTime();
    const currentTime = new Date().getTime();
    const timeLeft = eventDate - currentTime;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const [countdown, setCountdown] = useState(calculateCountdown);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 60000); // Update the countdown every minute

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      {/* Promo Section */}
      <div className="promo-section">
        <span>Event Starts in: {countdown.days} days, {countdown.hours} hours, {countdown.minutes} minutes</span>
      </div>

      {/* Header Section */}
      <header className="header">
        <div className="logo">HKX</div>
        <nav className="navigation">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Timeline</li>
            <li>Sponsors</li>
            <li>Prizes</li>
            <li>Core</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
