import React from 'react';
// import { Link } from 'react-router-dom';
import Resume from '../assets/brooke-starcher-resume.pdf';
import { HashLink as Link } from 'react-router-hash-link';

export default function Nav() {
  return (
    <ul className="flex justify-between text-3lg">
      <li className="mx-4 border-b-2 border-offWhite hover:text-secondary hover:border-secondary">
        <div>
          <Link to="/#work" smooth className="font-semibold text-xl">
            Work
          </Link>
        </div>
      </li>
      <li className="mx-4 border-b-2 border-offWhite hover:text-secondary hover:border-secondary">
        <Link to={`about`} className="font-semibold text-xl ">
          About
        </Link>
      </li>
      <li className="mx-4 border-b-2 border-offWhite hover:text-secondary hover:border-secondary">
        <a
          href={Resume}
          target="_blank"
          className="font-semibold text-xl"
          rel="noreferrer"
        >
          Resume
        </a>
      </li>
      {/* <li className="pr-4">
        <Link to={`case-study/2`}>Case Study 2</Link>
      </li> */}
    </ul>
  );
}
