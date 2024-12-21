import './AboutUs.css';  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const staffList = [
    {
      name: "Dr. John Doe",
      profession: "Head of Department",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Prof. Jane Smith",
      profession: "Associate Professor",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mr. Alex Brown",
      profession: "Lecturer",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="about-us-section">
      <div className="about-us-content">
        {/* Left side with description */}
        <div className="about-us-text">
          <h1>Dept of Information Technology</h1>
          <p>
            The Department of Information Technology is dedicated to providing
            innovative education and research in the field of technology. We
            focus on developing skilled professionals who are equipped with
            cutting-edge knowledge in software development, systems management,
            and IT infrastructure.
          </p>
        </div>
        
        {/* Right side with slideshow */}
        <div className="about-us-slider">
          <Slider {...settings}>
            {staffList.map((staff, index) => (
              <div key={index} className="slider-item">
                <img
                  src={staff.image}
                  alt={`${staff.name}`}
                  className="staff-image"
                />
                <h3 className="staff-name">{staff.name}</h3>
                <p className="staff-profession">{staff.profession}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
