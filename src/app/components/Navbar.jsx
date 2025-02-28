"use client";
import React, { useState } from 'react';
import IconButton from "./common/IconButton";
import Link from 'next/link';
import HamMenu from './common/HamMenu';
import Search from './common/Search';

const Navbar = ({config, toggleMenu, isSidebarOpen}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onHome = () => {
    if (isSidebarOpen) toggleMenu();
  }

  //TODO: Need to be update
  const isUserLoggedIn = () => {
    return false;
  }

  const handleBlur = (e) => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  return (
    <nav className="bg-white p-4 px-4 sm:px-8 h-20 flex justify-between items-center shadow-sm fixed w-full top-0 z-50 border-b-2">
      <div className="flex items-center w-2/5 justify-start">
        <HamMenu isOpen={isSidebarOpen} onClick={toggleMenu}/>
        <p className='ml-4'>Menu</p>
      </div>
      <Link onClick={onHome} href="/" className="flex items-center justify-center">
        <img src={config.logo} alt="Logo" className="h-24 w-24" />
      </Link>
      <div className="flex items-center w-2/5 justify-end" onBlur={handleBlur}>
        <Search/>
        {
          isUserLoggedIn ? <Link href="/login"><IconButton iconSrc="/user.svg" altText="user" /></Link>
          :
          <div className="relative inline-block">
            <IconButton onClick={() => setIsDropdownOpen(!isDropdownOpen)} iconSrc="/user.svg" altText="user" />
            {isDropdownOpen && (
              <div className="absolute mt-2 w-full sm:w-48 bg-white divide-y divide-gray-200 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0">
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-700">Signed in as</p>
                  <p className="text-sm font-medium text-gray-900">username@example.com</p>
                </div>
                <div className="py-1">
                  <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Orders
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    onClick={() => alert("Logged out")}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        }
        <Link href="/bag"><IconButton iconSrc="/cart.svg" altText="cart" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;