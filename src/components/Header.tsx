import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">HKX</div>
      <nav className="navigation">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Timeline</li>
          <li>Sponsors</li>
          <li>Prizes</li>
          <li>Core</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
