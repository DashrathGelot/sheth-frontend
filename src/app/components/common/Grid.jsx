import React from "react";

const Grid = ({ gap, cols, children }) => {
  return <div className={`grid grid-cols-1 sm:grid-cols-${cols} md:grid-cols-${cols * 2} gap-${gap}`}>{children}</div>;
};

export default Grid;
