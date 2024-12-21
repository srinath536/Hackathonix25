
import './Prizes.css';  // Import the CSS file

const Prizes = () => {
  return (
    <section className="prizes-section">
      <div className="prizes-overlay">
        <h1>Cash Prizes</h1>
        <p className="prizes-description">Get ready for some exciting prizes! The following cash prizes await the winners:</p>
        <div className="prizes-details">
          <div className="prize-item">
            <h3>1st Place</h3>
            <p className="prize-amount">$500</p>
            <p className="prize-info">Awarded to the team with the most innovative solution.</p>
          </div>
          <div className="prize-item">
            <h3>2nd Place</h3>
            <p className="prize-amount">$300</p>
            <p className="prize-info">For the runner-up with a brilliant concept and execution.</p>
          </div>
          <div className="prize-item">
            <h3>3rd Place</h3>
            <p className="prize-amount">$150</p>
            <p className="prize-info">Reward for the most promising project in the competition.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
