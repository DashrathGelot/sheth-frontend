"use client";
import React, { useState } from 'react';
import IconButton from "./common/IconButton";
import Menu from './Menu';
import Link from 'next/link';

const Navbar = ({ config}) => {
  const {logo, text} = config;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="bg-white p-5 h-24 flex justify-between items-center shadow-sm fixed w-full top-0 z-50">
        <div className="flex items-center">
          <IconButton iconSrc="/burger-menu.svg" altText="menu" onClick={toggleMenu} />
        </div>
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className=" h-20 w-20 mr-2" />
          <span className="text-primary tracking-widest text-3xl font-hind">{text}</span>
        </div>
        <div className="md:flex items-center">
          <div className="hidden md:flex ml-2">
            <IconButton iconSrc="/search.svg" altText="search" />
          </div>
          <div className='ml-2'>
            <Link href="/login">
              <IconButton iconSrc="/user.svg" altText="user" />
            </Link>
          </div>
          <div className='ml-2'>
            <IconButton iconSrc="/cart.svg" altText="cart" />
          </div>
        </div>
      </nav>
      <Menu isOpen={menuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Navbar;
