"use client";
import React, { useState, useEffect, useRef } from "react";
import IconButton from "./common/IconButton";
import Link from "next/link";
import HamMenu from "./common/HamMenu";
import Search from "./common/Search";
import { signOut } from "next-auth/react";

const Navbar = ({ config, toggleMenu, isSidebarOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(isSidebarOpen);
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

  // Toggle the user dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsMenuOpen(false); // Close menu when opening user dropdown
  };

  // Toggle the sidebar menu
  const handleToggleMenu = () => {
    toggleMenu(); // Keep existing menu functionality
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false); // Close user dropdown when opening menu
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target) // Prevent closing if inside Navbar
      ) {
        setIsDropdownOpen(false);
        setIsMenuOpen(false);
      }
    };

    if (isDropdownOpen || isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, isMenuOpen]);

  return (
    <nav
      ref={navbarRef}
      className="bg-white p-4 px-4 sm:px-8 h-20 flex justify-between items-center shadow-sm fixed w-full top-0 z-50 border-b-2"
    >
      <div className="flex items-center w-1/3 justify-start">
        <HamMenu isOpen={isMenuOpen} onClick={handleToggleMenu} />
        <p className="ml-4">Menu</p>
      </div>

      <Link href="/" className="flex items-center justify-center w-1/3">
        <img src={config.logo} alt="Logo" className="h-24 w-24" />
      </Link>

      <div className="flex items-center w-1/3 justify-end relative">
        <Search />
        <div className="relative" ref={dropdownRef}>
          {localStorage.getItem("user") === null || localStorage.getItem("user") === "null" ? (<>
            <Link href="/login">
              <IconButton iconSrc="/user.svg" altText="user" />
            </Link>
          </>) : (<>
            <IconButton iconSrc="/user.svg" altText="user" onClick={toggleDropdown} />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul className="pt-2 pr-0">
                  <li className="pt-2 pr-0 hover:bg-gray-100 cursor-pointer" onClick={() => setIsDropdownOpen(false)}>
                    <p className='pl-3'>
                      <span className="font-extrabold">
                        {localStorage.getItem("user") !== undefined ? (<>{localStorage.getItem("user")}</>) : (<></>)}
                      </span>
                    </p>
                  </li>
                  <li className="pt-2 pr-0 hover:bg-gray-100 cursor-pointer" onClick={() => setIsDropdownOpen(false)}>
                    <Link href="/order" className="flex items-center gap-2 cursor-pointer"
                    > <IconButton iconSrc="/cart.svg" altText="cart" />My Orders</Link>
                  </li>
                  <li className="pt-2 pb-2 hover:bg-gray-100 cursor-pointer" onClick={() => {
                    signOut({ redirect: false }); setIsDropdownOpen(false);
                    localStorage.setItem('token', "null");
                    localStorage.setItem('user', "null");
                  }}>
                    {/* Logout */}
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <IconButton
                        iconSrc="/logout.svg"
                        altText="Logout"
                        className="text-red-500"
                      />
                      <span className="text-red-500">Logout</span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </>)}
        </div>
        <Link href="/bag">
          <IconButton iconSrc="/cart.svg" altText="cart" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
