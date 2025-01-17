import './Sponsors.css';

const Sponsors = () => {
  const sponsors = [
    "https://cdn.worldvectorlogo.com/logos/calvin-klein.svg",
    "https://cdn.worldvectorlogo.com/logos/tiktok-logo.svg",
    "https://cdn.worldvectorlogo.com/logos/ngk-3.svg",
    "https://cdn.worldvectorlogo.com/logos/asus-rog-1.svg",
    "https://cdn.worldvectorlogo.com/logos/nippon-sanso.svg",
    "https://cdn.worldvectorlogo.com/logos/comdisco.svg",
    "https://cdn.worldvectorlogo.com/logos/aricoin-icon.svg",
    "https://cdn.worldvectorlogo.com/logos/pse-1.svg",
    "https://cdn.worldvectorlogo.com/logos/scien.svg",
    "https://cdn.worldvectorlogo.com/logos/e-online.svg",
    "https://cdn.worldvectorlogo.com/logos/yourhomedirect.svg",
    "https://cdn.worldvectorlogo.com/logos/nextra-3.svg"
  ];

  return (
    <section className="logoMarqueeSection">
      <div className="container" id="logoMarqueeSection">
        <h2 className="sponsorHeading">Our Sponsors</h2>
        <div className="default-content-container flex items-center">
          <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
            <div className="marquee" style={{ animationDuration: '57s' }}>
              {sponsors.map((logo, index) => (
                <a key={index} target="_blank" rel="noopener noreferrer">
                  <img src={logo} alt={`Sponsor ${index}`} className="marqueelogo" />
                </a>
              ))}
            </div>
            <div className="marquee" style={{ animationDuration: '57s' }}>
              {sponsors.map((logo, index) => (
                <a key={index} target="_blank" rel="noopener noreferrer">
                  <img src={logo} alt={`Sponsor ${index}`} className="marqueelogo" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
