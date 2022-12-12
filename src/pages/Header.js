import React from 'react';
import Nav from './Nav.js';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="container flex flex-col sm:flex-row sm:justify-between justify-center items-center p-4 pb-0 lg:px-36 px-8 sm:mb-16">
      <Link to={''}>
        <img src={logo} className="h-20" alt="Logo"></img>
      </Link>
      <Nav />
    </div>
  );
}
