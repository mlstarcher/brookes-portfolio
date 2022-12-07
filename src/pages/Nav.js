import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className="flex justify-between text-3lg">
      <li className="pr-4">
        <a href="#work" className="font-semibold text-xl pr-4">
          Work
        </a>
      </li>
      <li className="pr-4">
        <Link to={`about`} className="font-semibold text-xl pr-4">
          About
        </Link>
      </li>
      <li className="pr-4">
        <a
          href="../assets/brooke-starcher-resume.pdf"
          target="_blank"
          className="font-semibold text-xl"
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
