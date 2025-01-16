import { useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.display = 'none';
      }
    }, 1000);  // Changed to 1 second for demonstration

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="loader-overlay" id="loader">
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Loader;
