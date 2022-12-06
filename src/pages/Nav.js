import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <ul className="flex justify-between text-3lg">
      <li className="pr-4">
        <Link to={`home`}>Home</Link>
      </li>
      <li className="pr-4">
        <Link to={`about`}>About</Link>
      </li>
      <li className="pr-4">
        <a href="javascript.void(0)">Resume</a>
      </li>
      {/* <li className="pr-4">
        <Link to={`case-study/2`}>Case Study 2</Link>
      </li> */}
    </ul>
  );
}
