// FAQ.tsx
import React from "react";
import "./FAQ.css";

const FAQ: React.FC = () => {
  return (
    <div className="accordion">
      <h1>Frequently Asked Questions</h1>

      <div className="accordion-item">
        <input type="checkbox" id="accordion1" />
        <label htmlFor="accordion1" className="accordion-item-title">
          <span className="icon"></span>What is Hackathon 2025?
        </label>
        <div className="accordion-item-desc">
          Hackathon 2025 is a 48-hour event where developers, designers, and innovators come together to collaborate, compete, and build innovative tech solutions. Participants will work in teams to develop solutions for various challenges.
        </div>
      </div>

      <div className="accordion-item">
        <input type="checkbox" id="accordion2" />
        <label htmlFor="accordion2" className="accordion-item-title">
          <span className="icon"></span>How do I register for Hackathon 2025?
        </label>
        <div className="accordion-item-desc">
          You can register for the Hackathon 2025 event by visiting our official registration page on the website. The registration form will collect your details and select your preferred teams and challenges.
        </div>
      </div>

      <div className="accordion-item">
        <input type="checkbox" id="accordion3" />
        <label htmlFor="accordion3" className="accordion-item-title">
          <span className="icon"></span>Do I need prior experience to participate?
        </label>
        <div className="accordion-item-desc">
          No prior experience is required. Hackathon 2025 welcomes participants of all skill levels, whether you're a beginner or a seasoned developer. We also provide mentorship throughout the event.
        </div>
      </div>

      <div className="accordion-item">
        <input type="checkbox" id="accordion4" />
        <label htmlFor="accordion4" className="accordion-item-title">
          <span className="icon"></span>What challenges can I expect at Hackathon 2025?
        </label>
        <div className="accordion-item-desc">
          Challenges at Hackathon 2025 will include building AI solutions, blockchain projects, mobile apps, and web-based platforms. More information on specific challenges will be released closer to the event.
        </div>
      </div>

      <div className="accordion-item">
        <input type="checkbox" id="accordion5" />
        <label htmlFor="accordion5" className="accordion-item-title">
          <span className="icon"></span>What prizes will the winners receive?
        </label>
        <div className="accordion-item-desc">
          Winners of Hackathon 2025 will receive cash prizes, gift cards, and internship opportunities with top tech companies. The first-place team will also get the chance to showcase their project at a special event.
        </div>
      </div>
    </div>
  );
};

export default FAQ;
