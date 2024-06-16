import React from 'react';
import IconButton from './common/IconButton';

const MenuItem = ({ label, hasSubmenu, handleMenuClick, submenuOpen }) => (
  <div
    className={`mb-4 text-black text-lg w-full text-left flex justify-between items-center group ${
      submenuOpen === label ? 'underline' : 'hover:underline'
    }`}
  >
    <button
      onClick={() => handleMenuClick(hasSubmenu ? label : null)}
      className="flex-1 text-left"
    >
      {label}
    </button>
    {hasSubmenu && (
      <span
        className={`transition-opacity duration-300 ${
          submenuOpen === label || submenuOpen === null ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <IconButton iconSrc="/chevron-right.svg" altText=">" />
      </span>
    )}
  </div>
);

export default MenuItem;
