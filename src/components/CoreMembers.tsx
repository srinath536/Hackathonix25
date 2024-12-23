import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Add right arrow icon from react-icons
import "./CoreMembers.css";

const CoreMembers: React.FC = () => {
  const members = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      profilePic: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      name: "Jane Smith",
      role: "Backend Developer",
      profilePic: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/janesmith",
    },
    {
      name: "Alex Johnson",
      role: "Project Manager",
      profilePic: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/alexjohnson",
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      profilePic: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/emilydavis",
    },
    {
      name: "Chris Lee",
      role: "Full Stack Developer",
      profilePic: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/chrislee",
    },
    {
      name: "Sophie Williams",
      role: "Marketing Specialist",
      profilePic: "https://via.placeholder.com/150",
      linkedin: "https://www.linkedin.com/in/sophiewilliams",
    },
  ];

  return (
    <div className="core-members-container">
      <h1 className="core-members-title">Meet Our Core Members</h1>
      <div className="core-members-cards">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.profilePic} alt={member.name} className="member-pic" />
            <div className="member-info">
              <h2 className="member-name">{member.name}</h2>
              <p className="member-role">{member.role}</p>
            </div>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
              <FaArrowRight className="arrow-icon" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreMembers;
