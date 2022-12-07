import React from 'react';
import ComingSoonImage from '../assets/coming_soon.png';

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center mb-32">
      <img src={ComingSoonImage} className="h-96" alt="Coming Soon"></img>
    </div>
  );
}
