import React from "react";

const Grid = ({ gap, cols, children }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-${cols / 2} md:grid-cols-${cols} gap-${gap}`}>
      {children}
    </div>
  );
};

export default Grid;
