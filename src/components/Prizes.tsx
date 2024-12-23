import React from "react";
import "./Prizes.css";

const Prizes: React.FC = () => {
  return (
    <div className="prizes-container">
      <h1 className="prizes-heading">Exciting Bounties Await!</h1>
      <p className="prizes-description">Total Cash Pool of <span className="highlight">₹60,000</span></p>
      <div className="prizes-animations">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>
    </div>
  );
};

export default Prizes;
