import Link from 'next/link';
import React from 'react';
import { createURI } from '../services/rest';

const Submenu = ({ onClose, menu }) => (
  <div className="fixed top-0 left-1/4 h-full bg-white z-50 w-1/4 border-l">
    <div className="flex flex-col p-4 pt-24 ml-6">
      {menu.items.map((item, index) => (
        <Link
          onClick={onClose}
          href={createURI([menu.label,item])}
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
