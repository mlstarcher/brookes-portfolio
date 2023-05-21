import React, { useState, useEffect } from 'react';
import laptopImage from '../assets/sephora/sephora_macbook.png';
// import screenImages from './screens';

const screenImages = [];

const LaptopSlideshow = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prevScreen) => (prevScreen + 1) % screenImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <img src={laptopImage} alt="Laptop" />

      {screenImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Screen ${index + 1}`}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentScreen ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default LaptopSlideshow;
