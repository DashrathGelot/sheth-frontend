import React from 'react';

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

export default Submenu;
