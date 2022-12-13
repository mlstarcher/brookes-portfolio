import React from 'react';
import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center  bg-primary sm:h-56 h-40">
      <h4 className="text-base mb-4">Let's keep in touch!</h4>
      <div className="flex justify-between items-center">
        <a
          className="mx-2"
          href="mailto: brookezstarcher@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={email} className="h-10" alt="Email"></img>
        </a>
        <a
          className="mx-2"
          href="https://www.linkedin.com/in/brooke-starcher-829763240/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} className="h-10" alt="Linked In"></img>
        </a>
      </div>
    </footer>
  );
}
