import React from 'react';

export default function Footer() {
  return (
    <footer
      className="container flex flex-col justify-center items-center  bg-primary"
      style={{ height: '225px' }}
    >
      <h4 className="text-base mb-4">Let's keep in touch!</h4>
      <div className="flex flex-col items-center text-2xl">
        <p className="">
          <a
            href="mailto: brookezstarcher@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            brookezstarcher@gmail.com
          </a>
        </p>
        <p className="mx-8">
          <a
            href="https://www.linkedin.com/in/brooke-starcher-829763240/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
