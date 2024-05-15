import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-fifth p-4 flex justify-between items-center shadow-sm fixed w-full top-0 z-50">
      {/* Hamburger Icon */}
      <div className="flex items-center">
        <button className="text-primary focus:outline-none ">
          <img src="/burger-menu.svg" alt="" srcset="" className="w-6 h-6" />
        </button>
      </div>

      {/* Logo and Name (Centered) */}
      <div className="flex items-center justify-center">
        <img
          src="https://shorturl.at/yIY46"
          alt="Logo"
          className="h-8 w-8 mr-2"
        />
        <span className="text-primary font-bold text-xl font-hind">SHETH</span>
      </div>

      <div className="md:flex items-center">
        {/* Search Icon */}
        <div className="hidden md:flex">
          <button className="text-primary focus:outline-none mr-2">
            <img src="/search.svg" className="w-6 h-6" />
          </button>
        </div>
        {/* User Icon */}
        <button className="text-primary focus:outline-none mr-2">
          <img src="/user.svg" className="w-6 h-6" />
        </button>
        {/* Cart Icon */}
        <button className="text-primary focus:outline-none mr-2">
          <img src="/cart.svg" className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
