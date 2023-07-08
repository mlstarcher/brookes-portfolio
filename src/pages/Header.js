import React from 'react';
import Nav from './Nav.js';
// import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="container mx-auto flex flex-row justify-between items-center pt-4 pb-0 px-8 mb-8">
      <Link to={''}>
        <img src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/global/logo.png'} className="h-16" alt="Logo"></img>
      </Link>
      <Nav />
    </div>
  );
}
