import React from "react";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="aboutus-container">
      <h1 className="aboutus-title">About Us - IT Department</h1>
      <p className="aboutus-text">
        Welcome to the IT Department! We are a dedicated team of professionals committed to leveraging technology to drive innovation and excellence within our organization. 
        Our department is the backbone of all technical operations, ensuring smooth functioning of hardware, software, and network systems.
      </p>
      <p className="aboutus-text">
        Our mission is to provide reliable and efficient IT solutions that empower every member of the organization to achieve their goals. 
        From cybersecurity and data management to application development and technical support, we are here to help with all your IT needs.
      </p>
      <p className="aboutus-text">
        Collaboration, innovation, and a commitment to excellence define us. Join us as we continue to harness the power of technology to shape the future.
      </p>
    </div>
  );
};

export default AboutUs;
