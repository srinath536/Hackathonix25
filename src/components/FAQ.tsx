import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa"; // Right and Down icons
import "./FAQ.css";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What is Hackathonix?",
      answer: "Hackathonix is an annual hackathon that brings together developers, designers, and innovators to collaborate and build cutting-edge projects.",
    },
    {
      question: "Who can participate in the hackathon?",
      answer: "Anyone with a passion for technology and problem-solving can participate, regardless of skill level or experience.",
    },
    {
      question: "How do I register for the event?",
      answer: "You can register for Hackathonix on our official website by filling in your details and selecting your team members.",
    },
    {
      question: "What technologies are allowed in the hackathon?",
      answer: "All technologies, frameworks, and languages are welcome, so feel free to bring your creativity and skills to the table!",
    },
    {
      question: "Is there a prize pool?",
      answer: "Yes! We have an exciting cash prize pool and various other rewards for the winners and exceptional projects.",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              <span className="dropdown-icon">
                {activeIndex === index ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              {faq.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
