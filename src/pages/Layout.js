import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.js';
// import ScrollButton from './ScrollButton';
import Footer from './Footer.js';

export default function Layout() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="container mx-auto mt-4 wrapper px-4">
        <Outlet />
      </div>
      {/* <ScrollButton /> */}
      <Footer />
    </div>
  );
}
