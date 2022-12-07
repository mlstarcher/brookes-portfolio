import React from 'react';

export default function Welcome() {
  return (
    <div className="grid grid-cols-2 gap mb-32">
      <div className="">
        <h1 className="text-bold text-4xl pb-4">hi, my name is brooke</h1>
        <p className="pb-4">I’m a designer based in Portland, Oregon.</p>
        <p className="pb-4">I create delightful user friendly products that</p>
        <p className="pb-4">elevate human experiences.</p>
      </div>
      <div className="border-2 border-gray flex w-full justify-center items-center ">
        Image Placeholder
      </div>
    </div>
  );
}

// hi, my name is brooke

// I’m a designer based in Portland, Oregon.
// I create delightful user friendly products that
// elevate human experiences.
