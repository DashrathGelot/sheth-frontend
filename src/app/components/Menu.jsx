"use client";

import React, { useState, useEffect } from 'react';
import MenuItemList from './MenuItemList';
import Submenu from './Submenu';
import menuData from './config';

const Menu = ({ isOpen, onClose }) => {
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'slideMenuOverlay') {
      onClose();
    }
  };

  const handleMenuClick = (menu) => {
    setSubmenuOpen(menu);
  };

  useEffect(() => {
    if (!isOpen) {
      setSubmenuOpen(null);
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
            &times; Close
          </button>
        </div>
        <nav className="flex flex-col p-4">
          <MenuItemList handleMenuClick={handleMenuClick} submenuOpen={submenuOpen} />
        </nav>
      </div>

      {submenuOpen && (
        <Submenu
          title={menuData.find((menu) => menu.key === submenuOpen).label}
          items={menuData.find((menu) => menu.key === submenuOpen).items}
        />
      )}
    </>
  );
};

export default Menu;
