import React from 'react';
import Nav from './Nav.js';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    // <div className="container mx-auto flex flex-row justify-between items-center pt-4 pb-0 lg:px-36 px-8 sm:mb-16">
    <div className="container mx-auto flex flex-row justify-between items-center pt-4 pb-0 px-8 sm:px-0 sm:mb-16">
      <Link to={''}>
        <img src={logo} className="h-20" alt="Logo"></img>
      </Link>
      <Nav />
    </div>
  );
}
