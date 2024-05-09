import React from "react";

const Tile = ({ image, title }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-auto" src={image} alt={title} />
      </div>
    </div>
  );
};

export default Tile;
