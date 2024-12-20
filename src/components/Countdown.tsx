import React, { useEffect, useState, useRef } from 'react';
import './Countdown.css';

const Countdown: React.FC = () => {
  const targetDate = new Date('February 20, 2025').getTime(); // Target Date for Countdown

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isVisible, setIsVisible] = useState(false); // To track visibility

  const countdownRef = useRef<HTMLDivElement | null>(null); // Ref for countdown section

  useEffect(() => {
    // Function to update countdown
    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const difference = targetDate - currentTime;

      // Calculate time components
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      // When the countdown ends
      if (difference <= 0) {
        clearInterval(timerInterval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Call updateCountdown every second
    const timerInterval = setInterval(updateCountdown, 1000);

    updateCountdown(); // Initial call to set time immediately

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  // Handle intersection and add the visible class
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Show countdown when it's in view
        }
      });
    });

    if (countdownRef.current) {
      observer.observe(countdownRef.current);
    }

    return () => {
      if (countdownRef.current) {
        observer.unobserve(countdownRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={countdownRef}
      className={`countdown-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="countdown-container">
        <h1>Event Countdown</h1>
        <div className="countdown-time">
          <span>{timeLeft.days} Days</span>
          <span>{timeLeft.hours} Hours</span>
          <span>{timeLeft.minutes} Minutes</span>
          <span>{timeLeft.seconds} Seconds</span>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
