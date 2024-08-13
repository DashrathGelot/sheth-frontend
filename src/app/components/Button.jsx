import React from "react";
import styles from "../services/styles";

const Button = ({ type, label }) => {
  const { bgColor, textColor, textSize } = styles[type];
  return (
    <button className={`p-3 rounded-sm m-2 text-fifth ${bgColor} ${textColor} ${textSize}`}>
      {label}
    </button>
  );
};

export default Button;
