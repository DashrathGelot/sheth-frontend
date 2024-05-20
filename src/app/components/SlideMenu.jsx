"use client";

import React, { useState, useEffect } from 'react';

const SlideMenu = ({ isOpen, onClose }) => {
  const [isWomenSubmenuOpen, setWomenSubmenuOpen] = useState(false);
  const [isMenSubmenuOpen, setMenSubmenuOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'slideMenuOverlay') {
      onClose();
    }
  };

  const toggleWomenSubmenu = () => {
    setWomenSubmenuOpen(!isWomenSubmenuOpen);
  };

  const toggleMenSubmenu = () => {
    setMenSubmenuOpen(!isMenSubmenuOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          id="slideMenuOverlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleOutsideClick}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full bg-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50 w-1/3 shadow-lg`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <button onClick={onClose} className="text-black text-xl">
            &times;close
          </button>
        </div>
        <nav className="flex flex-col p-4">
          <div className="mb-4">
            <button
              onClick={toggleWomenSubmenu}
              className="text-black text-lg w-full text-left"
            >
              Women {isWomenSubmenuOpen ? '-' : '+'}
            </button>
            {isWomenSubmenuOpen && (
              <div className="ml-4 mt-2">
                <a href="#" className="block mb-2 text-black text-sm">Women Submenu 1</a>
                <a href="#" className="block mb-2 text-black text-sm">Women Submenu 2</a>
                <a href="#" className="block mb-2 text-black text-sm">Women Submenu 3</a>
              </div>
            )}
          </div>
          <div className="mb-4">
            <button
              onClick={toggleMenSubmenu}
              className="text-black text-lg w-full text-left"
            >
              Men {isMenSubmenuOpen ? '-' : '+'}
            </button>
            {isMenSubmenuOpen && (
              <div className="ml-4 mt-2">
                <a href="#" className="block mb-2 text-black text-sm">Men Submenu 1</a>
                <a href="#" className="block mb-2 text-black text-sm">Men Submenu 2</a>
                <a href="#" className="block mb-2 text-black text-sm">Men Submenu 3</a>
              </div>
            )}
          </div>
          <a href="#" className="mb-4 text-black text-lg">Services</a>
          <a href="#" className="mb-4 text-black text-lg">World of Shethh</a>
        </nav>
      </div>
    </>
  );
};

export default SlideMenu;
