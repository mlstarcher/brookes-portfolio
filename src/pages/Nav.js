import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className="flex justify-between text-3lg">
      <li className="mr-8 border-b-2 border-off-white hover:border-off-black">
        <a href="#work" className="font-semibold text-xl">
          Work
        </a>
      </li>
      <li className="mr-8 border-b-2 border-off-white hover:border-off-black">
        <Link to={`about`} className="font-semibold text-xl ">
          About
        </Link>
      </li>
      <li className="mr-8 border-b-2 border-off-white hover:border-off-black">
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
