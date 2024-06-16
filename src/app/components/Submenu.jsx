import React from 'react';

const Submenu = ({ menu }) => (
  <div className="fixed top-0 left-1/3 h-full bg-white z-50 w-1/3 shadow-lg">
    <nav className="flex flex-col p-4">
      {menu.items.map((item, index) => (
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

export default Submenu;
