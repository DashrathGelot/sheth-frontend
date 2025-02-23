'use client';
import React, { useEffect, useState } from "react";
import IconButton from '@/app/components/common/IconButton';
import Accordion from "./Accordion";
import { HttpMethod, paths } from "../constant/urlResource";
import rest from "../services/rest";
import Button from "./Button";

const FilterSlider = ({onFilter}) => {
  const [filterOptions, setfilterOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const toggleSlider = () => setIsOpen(!isOpen);

  const handleOptionSelect = (title, item) => {
    if (isColor(title)) {
      const newColors = [...colors];
      if (newColors.includes(item)) {
        setColors(newColors.filter(color => color !== item))
      } else {
        newColors.push(item);
        setColors(newColors);
      }
    } else {
      const newSizes = [...sizes];
      if (newSizes.includes(item)) {
        setSizes(newSizes.filter(size => size !== item));
      } else {
        newSizes.push(item);
        setSizes(newSizes);
      }
    }
  }

  const onApply = async () => {
    setLoading(true);
    const res = await onFilter({colors, sizes});
    console.log("in apply", res);
    if (res) {
      setLoading(false);
      toggleSlider();
    }
  }

  const isColor = (title) => {
    return title === "Colors";
  }

  const isSize = (title) => !isColor(title);

  const getClassName = (title, item) => {
    if (isColor(title)) {
      return `${colors.includes(item) ? "border-black" : "border-gray-400"} hover:border-gray-400`;
    }
    return `${sizes.includes(item) ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-400"} flex items-center justify-center`;
  }

  const isApplyDisable = () => colors.length === 0 && sizes.length === 0; 

  useEffect(() => {
    async function fetchOptions() {
      const resp = await rest(HttpMethod.GET, paths.GET_FILTERS_MENU);
      if (resp) {
        setfilterOptions(resp);
      }
    }
    fetchOptions();
  }, []);

  return (
    <div className="relative">
      {/* Filter Button */}
      <IconButton
        right="Filters"
        iconSrc="/filter.svg"
        className={"rounded-full border border-secondary p-2 w-28"}
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
        <div className="flex justify-between items-center p-4 pt-20 border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Filter by</h2>
          <button
            onClick={toggleSlider}
            className="text-gray-500 hover:text-gray-700 text-3xl"
          >
            &times;
          </button>
        </div>
        {/* Content */}
        <div className="p-4 flex-1 overflow-auto">
          {filterOptions.map((option) => <>
            <Accordion title={option.title}>
              <div className="mt-2 grid grid-cols-5 gap-2">
                { option.contents.map((content) => (
                  <div
                    key={content}
                    className={`w-10 h-10 rounded-md cursor-pointer border-2 ${getClassName(option.title, content)}`}
                    onClick={() => handleOptionSelect(option.title, content)}
                    style={isColor(option.title) ? {backgroundColor: content} : {}}
                  >{isSize(option.title) && content}</div>
                ))}
              </div>
            </Accordion>
            <hr className="my-4"/>
          </>)}
        </div>
        <div className="p-4 border-t border-gray-200">
          <Button
            className="w-full py-2 bg-black text-white text-center font-semibold rounded hover:bg-gray-800"
            onClick={onApply}
            name={"Apply"}
            disabled={isApplyDisable()}
            pending={loading}
          >
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSlider;
