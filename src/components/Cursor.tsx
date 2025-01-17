import React, { useState, useEffect } from "react";
import "./Cursor.css";
import astronautImage from "../assets/cu.png"; // Import image

const Cursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    setCursorPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // Use effect to listen to mouse movements
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
    >
      <div
        className="astronaut"
        style={{ backgroundImage: `url(${astronautImage})` }} // Set image
      />
    </div>
  );
};

export default Cursor;
