import "./AboutHack.css";

const AboutHack = () => {
  return (
    <div className="book">
       <a 
        href="\brochure.pdf"  // The path to the file you want to download
        className="download-button"
        download="Hackathonix_Brochure.pdf"   // You can specify the default name for the download
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
