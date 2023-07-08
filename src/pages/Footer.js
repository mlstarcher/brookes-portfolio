import React from 'react';
// import email from '../assets/email.svg';
// import linkedin from '../assets/linkedin.svg';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-primary h-32">
      <div className="flex justify-between items-center">
        <a
          className="mx-2"
          href="mailto: brookezstarcher@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src={email} className="h-8" alt="Email"></img> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
        </a>
        <a
          className="mx-2"
          href="https://www.linkedin.com/in/brooke-starcher-829763240/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src={linkedin} className="h-8" alt="Linked In"></img> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
        </a>
      </div>
      <h4 className="text-lg font-semibold mt-4">Let's keep in touch!</h4>
    </footer>
  );
}
