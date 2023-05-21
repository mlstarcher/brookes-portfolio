import React from 'react';
import portrait from '../assets/portrait.png';

export default function Welcome() {
  return (
    <div className="grid grid-cols-12 sm:mb-32 mb-16 mt-8 sm:-mt-8">
      <div className="flex flex-col justify-center mb-8 sm:mb-0 col-span-12 sm:col-start-2 sm:col-span-5">
        <h1 className="font-bold md:text-6xl text-2xl pb-4 text-primary px-0 mx-0">
          hi, my name is brooke
        </h1>
        <p className="sm:text-2xl text-base px-0 mx-0">
          I’m a designer based in Portland, Oregon.
          <br />I create delightful user friendly products that elevate human
          experiences.
        </p>
      </div>
      <div className="flex justify-center items-center mb-8 sm:mb-16 sm:mb-0 col-span-12 sm:col-start-7 sm:col-span-5">
        <div>
          <img
            src={portrait}
            className="max-w-full sm:h-auto sm:ml-7"
            alt="Portrait"
          ></img>
        </div>
      </div>
    </div>
  );
}
