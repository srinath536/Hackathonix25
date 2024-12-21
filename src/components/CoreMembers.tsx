import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CoreMembers.css";

const CoreMembers: React.FC = () => {
  // Sample Core Members Data
  const coreMembers = [
    { name: "John Doe", year: "2024", img: "https://www.w3schools.com/w3images/avatar2.png" },
    { name: "Jane Smith", year: "2023", img: "https://www.w3schools.com/w3images/avatar2.png" },
    { name: "Sam Wilson", year: "2022", img: "https://www.w3schools.com/w3images/avatar2.png" },
    { name: "Emma Johnson", year: "2021", img: "https://www.w3schools.com/w3images/avatar2.png" },
    { name: "Oliver Brown", year: "2020", img: "https://www.w3schools.com/w3images/avatar2.png" },
    { name: "Sophia Davis", year: "2019", img: "https://www.w3schools.com/w3images/avatar2.png" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear"
  };

  return (
    <div className="mainContainer">
      <h2 className="core-members-heading">Core Members</h2>
      <Slider {...settings}>
        {coreMembers.map((member, index) => (
          <div className="container" key={index}>
            <div className="member-card">
              <img className="member-image" src={member.img} alt={member.name} />
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-year">{member.year}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoreMembers;
