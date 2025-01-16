import React, { useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) { // Check if 'loader' is not null or undefined
        loader.style.display = 'none';
      }
    }, 1000);

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, []);

  return (
    <div className="loader-overlay" id="loader">
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Loader;
