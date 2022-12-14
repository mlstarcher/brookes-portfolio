import React from 'react';
import portrait from '../assets/portrait.svg';

export default function Welcome() {
  return (
    <div className="sm:pl-20 grid grid-cols-1 sm:grid-cols-2 gap sm:mb-32 mb-16 mt-8">
      <div className="flex flex-col justify-center mb-8 sm:mb-0">
        <h1 className="font-bold md:text-6xl text-2xl pb-4 text-primary">
          hi, my name is brooke
        </h1>
        <p className="sm:text-2xl text-base">
          I’m a designer based in Portland, Oregon.
        </p>
        <p className="sm:text-2xl text-base">
          I create delightful user friendly products that elevate human
          experiences.
        </p>
        <p className="sm:text-2xl text-base"></p>
      </div>
      <div className="flex justify-center items-center sm:pr-20 mb-16 mt-8 sm:mb-0">
        <div>
          <img
            src={portrait}
            className="max-w-full sm:h-auto h-48"
            alt="Portrait"
          ></img>
        </div>
      </div>
    </div>
  );
}
