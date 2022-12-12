import React from 'react';

export default function Footer() {
  return (
    <footer
      className="container flex justify-center bg-primary py-4"
      style={{ height: '225px' }}
    >
      <div className="flex flex-col text-center">
        <h4 className="p-4 font-semibold">Here's how to contact me:</h4>
        <p className="p-1">
          email me at
          <a
            href="mailto: brookezstarcher@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            brookezstarcher@gmail.com
          </a>
        </p>
        <p className="p-1">or</p>
        <p className="p-1">
          connect with me on
          <a
            href="https://www.linkedin.com/in/brooke-starcher-829763240/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
