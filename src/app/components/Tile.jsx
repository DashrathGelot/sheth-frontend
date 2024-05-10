import React from "react";

const Tile = ({ image, title, sizeClass }) => {
  return (
    <div className={`w-full ${sizeClass} p-4`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-auto" src={image} alt={title} />
      </div>
    </div>
  );
};

export default Tile;
