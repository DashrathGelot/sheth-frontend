"use client";

import React, { useState, useEffect } from 'react';

const Submenu = ({ title, items }) => (
  <div className="fixed top-0 left-1/3 h-full bg-white z-50 w-1/3 shadow-lg">
    <div className="p-4 flex justify-between items-center border-b">
      <span className="text-black text-xl">{title}</span>
    </div>
    <nav className="flex flex-col p-4">
      {items.map((item, index) => (
        <a
          href="#"
          key={index}
          className="block mb-2 text-black text-lg hover:underline"
        >
          {item}
        </a>
      ))}
    </nav>
  </div>
);

const ChevronRightIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-4 w-4 ml-2 ${isOpen ? 'block' : 'hidden group-hover:block'}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const SlideMenu = ({ isOpen, onClose }) => {
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'slideMenuOverlay') {
      onClose();
    }
  };

  const handleMenuClick = (menu) => {
    if (menu) {
      setSubmenuOpen(menu);
    } else {
      setSubmenuOpen(null);
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
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
          <button
            onClick={() => handleMenuClick('women')}
            className={`mb-4 text-black text-lg w-full text-left flex justify-between items-center group ${
              submenuOpen === 'women' ? 'underline' : 'hover:underline'
            }`}
          >
            Women <ChevronRightIcon isOpen={submenuOpen === 'women'} />
          </button>
          <button
            onClick={() => handleMenuClick('men')}
            className={`mb-4 text-black text-lg w-full text-left flex justify-between items-center group ${
              submenuOpen === 'men' ? 'underline' : 'hover:underline'
            }`}
          >
            Men <ChevronRightIcon isOpen={submenuOpen === 'men'} />
          </button>
          <a
            href="#"
            onClick={() => handleMenuClick(null)}
            className="mb-4 text-black text-lg hover:underline"
          >
            Services
          </a>
          <a
            href="#"
            onClick={() => handleMenuClick(null)}
            className="mb-4 text-black text-lg hover:underline"
          >
            World of Shethh
          </a>
        </nav>
      </div>

      {submenuOpen === 'women' && (
        <Submenu
          title="Women"
          items={['Women Submenu 1', 'Women Submenu 2', 'Women Submenu 3']}
        />
      )}
      {submenuOpen === 'men' && (
        <Submenu
          title="Men"
          items={['Men Submenu 1', 'Men Submenu 2', 'Men Submenu 3']}
        />
      )}
    </>
  );
};

export default SlideMenu;
