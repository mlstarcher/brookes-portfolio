import React, { useState } from 'react';
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
    <nav className='nav-link'>
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
              className="font-bold text-2xl border-b-2 border-offWhite hover:text-secondary hover:border-secondary nav-link"
            >
              Work
            </Link>
          </div>
        </li>
        <li className="ml-8 mb-6">
          <Link
            onClick={() => closeMenu()}
            to={`about`}
            className="font-bold text-2xl border-b-2 border-offWhite hover:text-secondary hover:border-secondary nav-link"
          >
            About
          </Link>
        </li>
        <li className="ml-8 mb-6">
          <a
            href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/brooke_starcher_resume.pdf"
            onClick={() => closeMenu()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-2xl border-b-2 border-offWhite hover:text-secondary hover:border-secondary nav-link"
          >
            Resume
          </a>
        </li>
      </ul>
      <ul className="justify-between text-3lg hidden sm:flex">
        <li className="mr-10 border-b-2 border-offWhite hover:text-secondary hover:border-secondary">
          <div>
            <Link to="/#work" smooth className="font-bold text-xl">
              Work
            </Link>
          </div>
        </li>
        <li className="mx-10 border-b-2 border-offWhite hover:text-secondary hover:border-secondary">
          <Link to={`about`} className="font-bold text-xl ">
            About
          </Link>
        </li>
        <li className="ml-10 border-b-2 border-offWhite hover:text-secondary hover:border-secondary">
          <a
            href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/brooke_starcher_resume.pdf"
            onClick={() => closeMenu()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xl"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
