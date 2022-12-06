import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.js';
import ScrollButton from './ScrollButton';
import Footer from './Footer.js';

export default function Layout() {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto px-8 lg:px-36 mt-4">
        <Outlet />
      </div>
      <ScrollButton />
      <Footer />
    </div>
  );
}
