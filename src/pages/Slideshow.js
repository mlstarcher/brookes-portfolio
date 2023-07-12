import React, { useState, useEffect } from 'react';

const slides = [
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

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slideshow">
      <div className="background-image">
        <img src="https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/global/macbook.png" alt="Laptop" />
      </div>
      <div className="slides">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={index === currentSlide ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
