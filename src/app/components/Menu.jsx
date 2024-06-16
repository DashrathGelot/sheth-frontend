"use client";

import React, { useState } from 'react';
import Submenu from './Submenu';
import MenuItem from './MenuItem';
import { config } from '../services/config';

const Menu = ({ isOpen, onClose }) => {
  const menuData = config.menuData;
  const [submenu, setSubmenu] = useState(null);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'slideMenuOverlay') {
      handleClose();
    }
  };

  const handleClose = (e) => {
    setSubmenu(null);
    onClose();
  };

  const handleMenuClick = (menu) => {
    if (submenu === menu) {
      setSubmenu(null);
    } else {
      setSubmenu(menu);
    }
  };

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
          <button onClick={handleClose} className="text-black text-xl">
            &times; Close
          </button>
        </div>
        <nav className="flex flex-col p-4">
          {menuData.map((menu) => (
            <MenuItem
              label={menu.label}
              hasSubmenu={!!menu.items}
              menuKey={menu.key}
              handleMenuClick={handleMenuClick}
              submenuOpen={submenu}
            />
          ))}
        </nav>
      </div>

      {submenu && <Submenu menu={menuData.find(menu => menu.label === submenu)}/>}
    </>
  );
};

export default Menu;
