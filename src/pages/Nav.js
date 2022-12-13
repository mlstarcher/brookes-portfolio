import React, { useState } from 'react';
// import Resume from '../assets/brooke-starcher-resume.pdf';
import { HashLink as Link } from 'react-router-hash-link';

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav>
      <div className="sm:hidden">
        <button
          id="nav-icon"
          onClick={handleToggle}
          className={`${navbarOpen ? 'open' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul
        className={`sm:hidden mt-28 navbar menuNav ${
          navbarOpen ? ' showMenu' : ''
        }`}
      >
        <li className="ml-8 mt-4 mb-6">
          <div>
            <Link
              onClick={() => closeMenu()}
              to="/#work"
              smooth
              className="font-semibold text-2xl border-b-2 border-offWhite hover:text-secondary hover:border-secondary"
            >
              Work
            </Link>
          </div>
        </li>
        <li className="ml-8 mb-6">
          <Link
            onClick={() => closeMenu()}
            to={`about`}
            className="font-semibold text-2xl border-b-2 border-offWhite hover:text-secondary hover:border-secondary"
          >
            About
          </Link>
        </li>
        <li className="ml-8 mb-6">
          <Link
            onClick={() => closeMenu()}
            to={`coming-soon`}
            className="font-semibold text-2xl border-b-2 border-offWhite hover:text-secondary hover:border-secondary"
          >
            Resume
          </Link>
        </li>
      </ul>
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
    </nav>
  );
}
