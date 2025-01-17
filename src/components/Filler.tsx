import React, { useState, useEffect } from "react";
import "./Filler.css";

const generateStars = () => {
  const stars = [];
  for (let i = 0; i < 150; i++) {
    const star = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      brightness: `${Math.random() * 0.5 + 0.5}`,
    };
    stars.push(star);
  }
  return stars;
};

const Filler = () => {
  const [stars, setStars] = useState(generateStars());
  const [shipStyle, setShipStyle] = useState({ top: "30%", left: "15%" });

  // Regenerate stars if needed (e.g., for dynamic effects or on mount)
  useEffect(() => {
    setStars(generateStars());
  }, []);

  // Handle mouse movement to make spaceship interactive
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();

    // Calculate the new position of the spaceship but restrict it inside the container bounds
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    const constrainedX = Math.min(Math.max(x, 5), 95); // Ensure it's within 5% to 95% of the container
    const constrainedY = Math.min(Math.max(y, 5), 95); // Ensure it's within 5% to 95% of the container

    setShipStyle({ top: `${constrainedY}%`, left: `${constrainedX}%` });
  };

  return (
    <div className="space-container" onMouseMove={handleMouseMove}>
      <div className="stars">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.brightness,
            }}
          ></div>
        ))}
      </div>
      <div className="planet">
      <div className="planet-ring"></div>
      </div>
      <div className="spaceship" style={shipStyle}>
        <div className="ship-body"></div>
        
      </div>
    </div>
  );
};

export default Filler;
