import React from 'react';
import portrait from '../assets/portrait.png';

export default function Welcome() {
  return (
    <div className="pl-20 grid grid-cols-2 gap mb-32 mt-8">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-6xl pb-4">Hi, my name is Brooke</h1>
        <p className="text-2xl">I’m a designer based in Portland, Oregon.</p>
        <p className="text-2xl">
          I create delightful user friendly products that elevate human
          experiences.
        </p>
        <p className="text-2xl"></p>
      </div>
      <div className="flex justify-center pr-20">
        <img src={portrait} className="" alt="Portrait"></img>
      </div>
    </div>
  );
}
