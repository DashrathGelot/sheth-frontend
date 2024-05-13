import React from "react";

const Grid = ({ gap, cols, children }) => {
  const colClasses = `grid grid-cols-1 sm:grid-cols-${cols} md:grid-cols-${
    cols * 2
  } gap-${gap}`;
  return <div className={colClasses}>{children}</div>;
};

export default Grid;
