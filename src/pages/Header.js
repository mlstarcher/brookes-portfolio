import React from 'react';
import Nav from './Nav.js';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <div className="container flex justify-between items-center p-4 px-36">
      <img src={logo} className="h-20" alt="Logo"></img>
      <Nav />
    </div>
  );
}
