"use client";

import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (!isOpen) {
      setSubmenu(null);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          id="slideMenuOverlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={handleOutsideClick}
        ></div>
      )}
      <div className={`fixed top-0 left-0 h-full bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-40 w-full sm:w-1/5 shadow-lg`}>
        {isOpen && <div className="flex flex-col p-4 ml-6 mt-20">
          {menuData.map((menu) => (
            <MenuItem
              key={menu.label}
              label={menu.label}
              hasSubmenu={!!menu.items}
              handleMenuClick={handleMenuClick}
              submenuOpen={submenu}
            />
          ))}
        </div>}
      </div>
      {submenu && isOpen && <Submenu menu={menuData.find(menu => menu.label === submenu)} onClose={handleClose}/>}
    </>
  );
};

export default Menu;
