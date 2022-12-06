import React from 'react';
import profile from '../assets/profile.jpg';

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center">
          <img
            src={profile}
            className="rounded-full"
            height="300"
            width="300"
            alt="Profile"
          ></img>
        </div>
        <div className="flex flex-col">
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
