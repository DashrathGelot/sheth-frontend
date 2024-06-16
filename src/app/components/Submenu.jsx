import React from 'react';

const Submenu = ({ menu }) => (
  <div className="fixed top-0 left-1/4 h-full bg-white z-50 w-1/4 border-l">
    <div className="flex flex-col p-4 pt-24 ml-6">
      {menu.items.map((item, index) => (
        <a
          href="#"
          key={index}
          className="block mb-2 text-black text-lg hover:underline"
        >
          {item}
        </a>
      ))}
    </div>
  </div>
);

export default Submenu;
