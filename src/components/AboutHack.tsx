import "./AboutHack.css";
const brochurePath = "/brochure.pdf";


const AboutHack = () => {
  return (
    <div className="book">
       <a 
        href= {brochurePath}  
        className="download-button"
        download="brochure.pdf"   
      >
        Download Brochure
      </a>
      <div className="cover">
        <p>About Hackathonix</p>
        <span className="click-me-text">Click Me!</span>
      </div>
    </div>
  );
};

export default AboutHack;
