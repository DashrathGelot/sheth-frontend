"use client";

import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import Submenu from './Submenu';
import config from '../services/config'; 

const Menu = ({ isOpen, onClose }) => {
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'slideMenuOverlay') {
      onClose();
    }
  };

  const handleMenuClick = (menuKey) => {
    const menu = config.menuData.find((menu) => menu.key === menuKey);
    if (menu && menu.items && menu.items.length > 0) {
      setSubmenuOpen((prev) => (prev === menuKey ? null : menuKey));
    } else {
      setSubmenuOpen(null);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setSubmenuOpen(null);
    }
  }, [isOpen]);

  const submenuData = config.menuData.find((menu) => menu.key === submenuOpen);

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
          {config.menuData.map((menu) => (
            <MenuItem
              key={menu.key}
              label={menu.label}
              hasSubmenu={!!menu.items}
              menuKey={menu.key}
              handleMenuClick={handleMenuClick}
              submenuOpen={submenuOpen}
            />
          ))}
        </nav>
      </div>

      {submenuData && (
        <Submenu
          title={submenuData.label}
          items={submenuData.items}
        />
      )}
    </>
  );
};

export default Menu;
