import React, { useEffect, useRef } from "react";
import "./Prizes.css";

const Prizes = () => {
  const prizesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prizeValues = [60000, 30000, 20000, 10000]; // Include total cash pool value
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && prizesRef.current) {
            const prizeElements = prizesRef.current.querySelectorAll(
              ".prize-amount"
            );
            prizeElements.forEach((el, index) => {
              let current = 0;
              const increment = prizeValues[index] / 50;
              const target = prizeValues[index];

              const interval = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(interval);
                }
                el.textContent = `₹${Math.round(current).toLocaleString()}`;
              }, 50);
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is visible
    );

    if (prizesRef.current) {
      observer.observe(prizesRef.current);
    }

    return () => {
      if (prizesRef.current) {
        observer.unobserve(prizesRef.current);
      }
    };
  }, []);

  return (
    <div className="prizes-section" ref={prizesRef}>
      <h1 className="prizes-title">Exciting Prizes Await You!</h1>
      <p className="prize-amount cash-pool">₹0</p>

      <div className="prizes-grid">
        <div className="prize-card">
          <h2>1st Place</h2>
          <p className="prize-amount">₹0</p>
        </div>
        <div className="prize-card">
          <h2>2nd Place</h2>
          <p className="prize-amount">₹0</p>
        </div>
        <div className="prize-card">
          <h2>3rd Place</h2>
          <p className="prize-amount">₹0</p>
        </div>
      </div>
      <p className="prizes-footer">And more surprises to be unveiled!</p>
    </div>
  );
};

export default Prizes;
