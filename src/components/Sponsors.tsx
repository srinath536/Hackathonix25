import React from "react";
import "./Sponsors.css";

const Sponsors: React.FC = () => {
  return (
    <div className="sponsors-container">
      <h1 className="sponsors-title">Our Sponsors</h1>
      <div className="sponsors-logos">
        <div className="sponsor-logo">
          <img src="https://via.placeholder.com/150?text=Google" alt="Google" />
        </div>
        <div className="sponsor-logo">
          <img src="https://via.placeholder.com/150?text=YouTube" alt="YouTube" />
        </div>
        <div className="sponsor-logo">
          <img src="https://via.placeholder.com/150?text=GitHub" alt="GitHub" />
        </div>
        <div className="sponsor-logo">
          <img src="https://via.placeholder.com/150?text=LinkedIn" alt="LinkedIn" />
        </div>
        <div className="sponsor-logo center-logo">
          <img src="https://via.placeholder.com/150?text=Twitter" alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
