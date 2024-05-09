import React from "react";

const ProductCard = ({ image, title, price, discount, discountedPrice }) => {
  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4
    bg-white shadow-md rounded-lg overflow-hidden"
    >
      <img className="w-full h-full object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-700">₹{price}</span>
          <div className="text-sm text-green-500">
            <span className="mr-1">-{discount}%</span>
            <span>₹{discountedPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
