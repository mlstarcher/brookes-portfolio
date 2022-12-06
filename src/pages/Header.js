import React from 'react';
import Nav from './Nav.js';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <div className="container flex flex-col sm:flex-row sm:justify-between justify-center items-center p-4 lg:px-36 px-8">
      <img src={logo} className="h-20" alt="Logo"></img>
      <Nav />
    </div>
  );
}
