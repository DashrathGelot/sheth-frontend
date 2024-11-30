'use client';
import React, { useState } from "react";
import IconButton from '@/app/components/common/IconButton';

const FilterSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [activeAccordion, setActiveAccordion] = useState("");

  const toggleSlider = () => setIsOpen(!isOpen);

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? "" : section);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    console.log("Selected color:", color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    console.log("Selected size:", size);
  };

  return (
    <div className="relative">
      {/* Filter Button */}
      <IconButton
        right="Filters"
        iconSrc="/filter.svg"
        className={"rounded-full border border-secondary p-2"}
        onClick={toggleSlider}
      />

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSlider}
        ></div>
      )}

      {/* Filter Slider */}
      <div
        className={`fixed bottom-0 right-0 p-12 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-full sm:max-w-[60%] lg:max-w-[550px] flex flex-col z-40`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 pt-20 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Filter by</h2>
          <button
            onClick={toggleSlider}
            className="text-gray-500 hover:text-gray-700 text-lg"
          >
            ✖
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 overflow-auto">
          {/* Color Accordion */}
          <div>
            <button
              onClick={() => toggleAccordion("color")}
              className="w-full text-left py-4 font-medium text-gray-700 focus:outline-none flex justify-between items-center"
            >
              Colors
              <span>{activeAccordion === "color" ? "-" : "+"}</span>
            </button>
            {activeAccordion === "color" && (
              <div className="mt-2 grid grid-cols-5 gap-2">
                {["red", "blue", "green", "yellow"].map((color) => (
                  <div
                    key={color}
                    className={`w-10 h-10 bg-${color}-500 rounded-md cursor-pointer border-2 ${
                      selectedColor === color ? "border-black" : "border-transparent"
                    } hover:border-gray-400`}
                    onClick={() => handleColorSelect(color)}
                  ></div>
                ))}
              </div>
            )}
          </div>

          {/* Size Accordion */}
          <div className="mt-4 border-t border-gray-200">
            <button
              onClick={() => toggleAccordion("size")}
              className="w-full text-left py-4 mt-4 font-medium text-gray-700 focus:outline-none flex justify-between items-center"
            >
              Size
              <span>{activeAccordion === "size" ? "-" : "+"}</span>
            </button>
            {activeAccordion === "size" && (
              <div className="mt-2 grid grid-cols-5 gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <div
                    key={size}
                    className={`w-10 h-10 flex items-center justify-center border-2 rounded-md cursor-pointer ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-700 border-gray-400"
                    } `}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <button
            className="w-full py-2 bg-black text-white text-center font-semibold rounded hover:bg-gray-800"
            onClick={() => {
              console.log("Apply Filters");
              toggleSlider();
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSlider;
