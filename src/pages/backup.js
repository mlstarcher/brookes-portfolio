import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/frames/frames/2.png',
    'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/frames/frames/3.png',
    'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/frames/frames/4.png',
    'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/frames/frames/5.png',
    'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/frames/frames/6.png',
    'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/frames/frames/7.png',
    'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/frames/frames/8.png',
    'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/frames/frames/9.png',
    'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/frames/frames/10.png',
    'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/frames/frames/21.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="relative " style={{ width: '100%', height: '100%' }}>
      <img
        className="w-full h-auto"
        src="https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/global/macbook.png"
        alt="Laptop"
        style={{ position: 'absolute', zIndex: 10 }}
      />
      {images.map((image, index) => (
        <div
          key={index}
          className="slides"
          style={{
            zIndex: 1,
            position: 'absolute',
            top: '0',
            left: '48%',
            transform: 'translate(-50%, -50%)',
            width: '65%',
            height: '220px',
            opacity: currentImageIndex === index ? 1 : 0,
            transition: 'opacity 0.5s ease',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
          }}
        ></div>
      ))}
    </div>
  );
};

export default Slideshow;
