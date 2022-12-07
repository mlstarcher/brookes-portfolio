import React from 'react';

export default function Welcome() {
  return (
    <div className="grid grid-cols-2 gap mb-32">
      <div>
        <h1 className="text-bold text-4xl pb-4">Hi, my name is</h1>
        <h1 className="text-bold text-4xl pb-4">Brooke Starcher.</h1>
        <p className="pb-4">I’m a UX/UI designer based in Portland</p>
        <p className="pb-4">creating products and services with</p>
        <p className="pb-4">a human-centered approach</p>
      </div>
      <div
        className="border-2 border-gray flex justify-center items-center"
        style={{ height: '300px', width: '300px' }}
      >
        Image Placeholder
      </div>
    </div>
  );
}
