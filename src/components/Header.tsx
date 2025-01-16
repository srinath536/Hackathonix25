import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const calculateCountdown = () => {
    const eventDate = new Date("February 27, 2025 00:00:00").getTime();
    const currentTime = new Date().getTime();
    const timeLeft = eventDate - currentTime;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="promo-section">
        <span>
          Event Starts in: {countdown.days} days, {countdown.hours} hours, {countdown.minutes} minutes, {countdown.seconds} seconds
        </span>
      </div>

     
    </div>
  );
};

export default Header;
