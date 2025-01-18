import "./Domain.css";
import appdevLogo from "../assets/appdev.png";
import ai from "../assets/ai.png";
import iot from "../assets/iot.png";
import cyber from "../assets/cyber.png";

const domains = [
  {
    title: "App & Web Development",
    description: "App & Web Development involves designing, building, and maintaining applications and websites using programming languages like JavaScript, HTML, CSS, and frameworks such as React and Angular.",
    logo: appdevLogo,
  },
  {
    title: "Cyber Security",
    description: "Cyber Security is the practice of protecting systems, networks, and programs from digital attacks to ensure confidentiality, integrity, and availability of data.",
    logo: cyber,
  },
  {
    title: "AI & ML",
    description: "AI & ML focuses on creating intelligent systems capable of learning, reasoning, and solving problems using algorithms for tasks like prediction and automation.",
    logo: ai,
  },
  {
    title: "IoT & Hardware",
    description: "IoT & Hardware deals with connecting physical devices, sensors, and machines to the internet, enabling them to communicate and work together in real time.",
    logo: iot,
  },
];

const Domain = () => {
  return (
    <div className="container">
      <h2 className="heading">DOMAINS</h2>
      <div className="card-container">
        {domains.map((domain, index) => (
          <div key={index} className="card">
            <div className="card-front">
              <img src={domain.logo} alt={`${domain.title} logo`} className="card-logo" />
              <p className="card-title">{domain.title}</p>
            </div>
            <div className="card-back">
              <p className="card-description">{domain.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domain;
