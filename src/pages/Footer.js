import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-primary relative mt-10">
      <img src="https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/global/footer_ellipse.png" role="presentation" className="w-full h-auto px-4" style={{ maxWidth: "400px", transform: 'rotate(-0.3deg)', marginTop: "-1.5px"}} alt="Footer Ellipse"></img>
      <div className="absolute flex items-center justify-center flex flex-col">
        <h4 className="text-lg font-semibold mt-6">Let's keep in touch!</h4>
        <div className="flex justify-between items-center mt-2">
          <a
            className="mx-2"
            href="mailto: brookezstarcher@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 512 512"><path d="M32 159.2l224 154 224-154V96H32v63.2zM480 198L256 352 32 198V416H480V198zM0 416V176 96 64H32 480h32V96v80V416v32H480 32 0V416z"/></svg>
          </a>
          <a
            className="mx-2"
            href="https://www.linkedin.com/in/brooke-starcher-829763400/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="40px"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
          </a>
        </div>
      </div>
      <img src="https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/global/footer_tape.png" role="presentation" className="object-cover w-full sm:h-auto h-5 mb-8 mt-16 sm:mt-32" alt="Brooke ZS"></img>
    </footer>
  );
}
