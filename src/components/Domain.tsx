import "./Domain.css"; 
import appdevLogo from "../assets/appdev.png"; 
import ai from "../assets/ai.png";
import iot from "../assets/iot.png";
import cyber from "../assets/cyber.png";

const domains = [
  { 
    title: "App & Web Development", 
    description: "Artificial Intelligence (AI) is about creating systems that can perform tasks that typically require human intelligence, such as image recognition and decision-making.",
    logo: appdevLogo 
  },
  { 
    title: "Cyber Security", 
    description: "Machine Learning (ML) is a subset of AI focused on building algorithms and models that allow computers to learn and make predictions from data.",
    logo: cyber
  },
  { 
    title: "AI & ML", 
    description: "Full Stack development involves working on both the front-end and back-end of web applications, using technologies like JavaScript, HTML, CSS, Node.js, and more.",
    logo: ai
  },
  { 
    title: "IOT & Hardware", 
    description: "UI/UX design focuses on creating user-friendly interfaces (UI) and optimizing the overall user experience (UX) of applications and websites.",
    logo: iot
  }
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
