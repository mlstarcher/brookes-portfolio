import React from 'react';
import Nav from './Nav.js';
// import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="container mx-auto flex flex-row justify-between items-end pt-4 pb-0 sm:px-8 px-4">
      <Link to={''}>
        <img src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/global/logo.png'} className="h-10 sm:h-16" alt="Logo"></img>
      </Link>
      <Nav />
    </div>
  );
}
