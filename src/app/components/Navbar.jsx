"use client";
import React from 'react';
import IconButton from "./common/IconButton";
import Link from 'next/link';
import HamMenu from './common/HamMenu';
import Search from './common/Search';

const Navbar = ({config, toggleMenu, isSidebarOpen}) => {
  const onHome = () => {
    if (isSidebarOpen) toggleMenu();
  }

  return (
    <nav className="bg-white p-4 px-4 sm:px-8 h-20 flex justify-between items-center shadow-sm fixed w-full top-0 z-50 border-b-2">
      <div className="flex items-center w-2/5 justify-start">
        <HamMenu isOpen={isSidebarOpen} onClick={toggleMenu}/>
        <p className='ml-4'>Menu</p>
      </div>
      <Link onClick={onHome} href="/" className="flex items-center justify-center">
        <img src={config.logo} alt="Logo" className="h-24 w-24" />
      </Link>
      <div className="flex items-center w-2/5 justify-end">
        <Search/>
        <Link href="/login"><IconButton iconSrc="/user.svg" altText="user" /></Link>
        <Link href="/bag"><IconButton iconSrc="/cart.svg" altText="cart" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
