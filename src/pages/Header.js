import React from 'react';
import Nav from './Nav.js';

export default function Header() {
  return (
    <div className="container flex justify-between p-8 bg-300">
      <div>Logo</div>
      <Nav />
    </div>
  );
}
