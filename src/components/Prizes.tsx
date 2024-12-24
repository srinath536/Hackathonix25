import React from "react";
import "./Prizes.css";

const Prizes: React.FC = () => {
  return (
    <div className="prizes-container">
      <div className="receipt">
        <h1 className="receipt-title">Prize Pool Receipt</h1>
        <p className="receipt-detail">27th February 2025</p>
        <p className="receipt-detail">9:00 AM</p>
        <p className="receipt-detail">
          <span>Hackathon Name:</span> Hackathonix25
        </p>
        <p className="receipt-detail">
          <span>Bill Code:</span> HACKATHONIX27022025
        </p>

        <hr className="receipt-dotted-line" />

        {/* Adding Food Items */}
        <div className="receipt-item">
          <span className="item-label">No. of Items:</span>
          <span className="item-value">4</span>
        </div>
        
        <div className="receipt-item">
          <span className="item-label">Name of The Item:</span>
          <span className="item-value">App & Web development </span>
        </div>

        <div className="receipt-item">
          <span className="item-label">Name of The Item:</span>
          <span className="item-value">Cyber Security</span>
        </div>

        <div className="receipt-item">
          <span className="item-label">Name of The Item:</span>
          <span className="item-value">AI & ML</span>
        </div>

        <div className="receipt-item">
          <span className="item-label">Name of The Item:</span>
          <span className="item-value">IOT & Hardware</span>
        </div>

        <hr className="receipt-dotted-line" />

        <div className="receipt-total">
          <span>Total:</span> ₹60,000
        </div>

        <hr className="receipt-dotted-line" />

        <p className="receipt-footer">Thank you for visiting us!</p>
      </div>
    </div>
  );
};

export default Prizes;
