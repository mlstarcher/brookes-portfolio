import React from 'react';
// import Resume from '../assets/brooke-starcher-resume.pdf';
import { HashLink as Link } from 'react-router-hash-link';
import Hamburger from './Hamburger.js';
import useMenuStatus from '../App.js';

export default function Nav() {
  const ctx = useMenuStatus();

  return (
    <div>
      <div className="sm:hidden">
        <Hamburger
          isOpen={ctx.isMenuOpen}
          onStateChange={(state) => ctx.stateChangeHandler(state)}
        />
      </div>
      <ul className="justify-between text-3lg hidden sm:flex">
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
          <Link to={`coming-soon`} className="font-semibold text-xl ">
            Resume
          </Link>
        </li>
        {/* <li className="mx-4 border-b-2 border-offWhite hover:text-secondary hover:border-secondary">
        <a
          href={Resume}
          target="_blank"
          className="font-semibold text-xl"
          rel="noreferrer"
        >
          Resume
        </a>
      </li> */}
      </ul>
    </div>
  );
}
