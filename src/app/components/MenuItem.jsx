"use client";
import React, { useState } from 'react';
import IconButton from './common/IconButton';

const MenuItem = ({ label, hasSubmenu, handleMenuClick, submenuOpen }) => {
  const [active, setActive] = useState(null);

  return (
    <div
      className={`mb-4 text-black text-lg w-full text-left flex justify-between items-center cursor-pointer group ${
        (active || submenuOpen === label)  ? 'underline' : "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" 
      }`} onMouseOver={() => setActive(label)} onMouseLeave={() => setActive(null)} 
    >
      <div
        onClick={() => handleMenuClick(label)}
        className="flex-1 text-left"
      >
        {label}
      </div>
      {(active || submenuOpen === label) && hasSubmenu && (
        <span
          className={"transition-opacity duration-300"}
        >
          <IconButton iconSrc="/chevron-right.svg" altText=">" />
        </span>
      )}
    </div>
  );
} 

export default MenuItem;
