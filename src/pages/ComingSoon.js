import React from 'react';
import coming_soon from '../assets/coming_soon.svg';

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center sm:mb-60 mb-32 mt-16">
      <img src={coming_soon} className="m-w-100 h-auto" alt="Coming Soon"></img>
    </div>
  );
}
