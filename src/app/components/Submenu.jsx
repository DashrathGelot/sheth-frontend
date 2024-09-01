import Link from 'next/link';
import React from 'react';
import { createURI } from '../services/rest';
import { UI_Paths } from '../constant/urlResource';

const Submenu = ({ onClose, menu }) => (
  <div className="fixed top-0 h-full bg-white z-40 w-full sm:w-1/5 border-l left-0 sm:left-[20%]">
    <div className="flex flex-col p-4 pt-24 ml-6">
      {menu.items.map((item, index) => (
        <Link
          onClick={onClose}
          href={createURI([UI_Paths.PRODUCTS, menu.label,item])}
          key={index}
          className="block mb-2 text-black text-lg hover:underline"
        >
          {item}
        </Link>
      ))}
    </div>
  </div>
);

export default Submenu;
