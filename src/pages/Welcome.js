import React from 'react';
import portrait from '../assets/portrait.png';

export default function Welcome() {
  return (
    <div className="sm:pl-20 grid grid-cols-1 md:grid-cols-2 gap sm:mb-32 sm:mt-8 mt-4">
      <div className="flex flex-col justify-center order-2 md:order-1">
        <h1 className="font-bold md:text-6xl text-2xl pb-4">
          Hi, my name is Brooke
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
      <div className="flex justify-center items-center sm:pr-20 order-1 md:order-2 mb-16 sm:mb-0">
        <div>
          <img
            src={portrait}
            className="max-w-full h-auto"
            alt="Portrait"
          ></img>
        </div>
      </div>
    </div>
  );
}
