import React from "react";
import styles from "../services/styles";

const Button = ({ type, label }) => {
  const { bgColor, textColor } = styles[type];
  return (
    <button className={`p-3 rounded-sm m-2 text-fifth ${bgColor} ${textColor}`}>
      {label}
    </button>
  );
};

export default Button;
