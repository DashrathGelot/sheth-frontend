// components/ProductDetails.jsx
"use client";

import Accordion from './Accordion';
import Button from './Button';
import { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const renderOptions = (options, selectedOption, setSelectedOption, isColor) => (
    <div className="flex space-x-2">
      {options.map((option, index) => (
        <label key={index} className="cursor-pointer">
          <input 
            type="radio" 
            name={isColor ? 'color' : 'size'} 
            value={option} 
            checked={selectedOption === option}
            onChange={() => setSelectedOption(option)} 
            className="hidden" 
          />
          <span 
            className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedOption === option ? 'border-2 border-black' : 'border'}`} 
            style={isColor ? { backgroundColor: option } : {}}
          >
            {!isColor && option}
          </span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="product-details w-full lg:w-3/4 p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl mb-4">{product.price}</p>
      
      <div className="mb-4">
        <label className="block mb-2">Colors</label>
        {renderOptions(product.colors, selectedColor, setSelectedColor, true)}
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">Sizes</label>
        {renderOptions(product.sizes, selectedSize, setSelectedSize, false)}
      </div>

      <Button type="primary" label="Add to Cart" />

      {product.accordions.map((accordion, index) => (
        <Accordion key={index} title={accordion.title} details={accordion.details} />
      ))}
    </div>
  );
};

export default ProductDetails;
