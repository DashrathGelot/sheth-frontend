import React from "react";
import IconButton from "./common/IconButton";

const Navbar = ({ config}) => {
  const {logo, text} = config;
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-sm fixed w-full top-0 z-50">
      {/* Hamburger Icon */}
      <div className="flex items-center">
        <IconButton iconSrc="/burger-menu.svg" altText="menu" />
      </div>

      {/* Logo and Name (Centered) */}
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
        <span className="text-primary font-bold text-xl font-hind">{text}</span>
      </div>

      <div className="md:flex items-center">
        {/* Search Icon */}
        <div className="hidden md:flex">
          <IconButton iconSrc="/search.svg" altText="search" />
        </div>
        {/* User Icon */}
        <IconButton iconSrc="/user.svg" altText="user" />
        {/* Cart Icon */}
        <IconButton iconSrc="/cart.svg" altText="cart" />
      </div>
    </nav>
  );
};

export default Navbar;
