import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col sm:mb-16 sm:mt-32 mt-8">
      <div className="grid grid-cols-12">
        <div className="flex flex-col items-center col-span-12 sm:col-start-2 sm:col-end-7">
          <img
            src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/global/profile.jpg'}
            className="m-w-100 h-auto"
            height="300"
            width="300"
            alt="Profile"
          ></img>
        </div>
        <div className="flex flex-col text-left sm:pt-0 pt-8 sm:text-2xl text-base col-span-12 sm:col-start-7 sm:col-end-12">
          <p className="pb-4">Hi! I’m Brooke and I’m a Product Designer.</p>
          <p className="pb-4">
            As a Product Designer, I want to help bridge the gap between humans
            and technology. I am passionate about communicating through visual
            elements in order to make experiences feel intuitive and delightful.
            I believe that good design comes from empathizing with the user’s
            experience and translating those observations into products that are
            accessible to all.
          </p>
          <p className="pb-4">
            I come from a background in Fashion Design as well as Progressive
            Early Childhood Education. While different, both of these fields
            have informed my interest in pursuing Product Design because of the
            way they incorporate mindful observation and creative solutions. My
            experience facilitating that process has been a natural segway to
            the world of Product Design.
          </p>
          <p className="pb-4">Let’s connect and chat design!</p>
        </div>
      </div>
    </div>
  );
}
