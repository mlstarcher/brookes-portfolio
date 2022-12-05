import React from 'react';
import Nav from './Nav.js';

export default function Header() {
  return (
    <div className="container flex justify-between p-4 bg-purple sticky top-0 z-50">
      <div>Logo</div>
      <Nav />
    </div>
  );
}
