import React, { useState } from 'react';
import './FAQ.css';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the dropdown if already open
    } else {
      setActiveIndex(index); // Open the selected dropdown
    }
  };

  const faqs = [
    { question: "What is the event about?", answer: "This is a hackathon focusing on blockchain technology and innovation." },
    { question: "How do I register?", answer: "You can register through our official website by filling out the registration form." },
    { question: "What is the prize pool?", answer: "The total prize pool is $10,000, distributed among the top 3 winners." },
    { question: "When is the event happening?", answer: "The event is scheduled for January 2025." },
    { question: "Can I participate remotely?", answer: "Yes, you can participate remotely via our online platform." },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-question" 
              onClick={() => toggleAnswer(index)}
            >
              <span>{faq.question}</span>
              <span className={`faq-toggle ${activeIndex === index ? 'open' : ''}`}>&#9660;</span>
            </div>
            <div 
              className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
