import React from 'react';
import portrait from '../assets/portrait.png';

export default function Welcome() {
  return (
    <div className="grid grid-cols-2 gap mb-32">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-6xl pb-4">hi, my name is brooke</h1>
        <p className="text-2xl">I’m a designer based in Portland, Oregon.</p>
        <p className="text-2xl">
          I create delightful user friendly products that
        </p>
        <p className="text-2xl">elevate human experiences.</p>
      </div>
      <div className="flex w-full justify-center items-center ">
        <img src={portrait} className="" alt="Portrait"></img>
      </div>
    </div>
  );
}
