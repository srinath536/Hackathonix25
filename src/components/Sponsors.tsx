
import './Sponsors.css';  // Import the CSS file

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      <div className="sponsors-overlay">
        <h1>Our Sponsors</h1>
        <div className="sponsors-logos">
          <img src="https://via.placeholder.com/150x50?text=Logo+1" alt="Company Logo 1" className="sponsor-logo" />
          <img src="https://via.placeholder.com/150x50?text=Logo+2" alt="Company Logo 2" className="sponsor-logo" />
          <img src="https://via.placeholder.com/150x50?text=Logo+3" alt="Company Logo 3" className="sponsor-logo" />
          <img src="https://via.placeholder.com/150x50?text=Logo+4" alt="Company Logo 4" className="sponsor-logo" />
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
