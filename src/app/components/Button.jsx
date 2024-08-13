import React from "react";
import styles from "../services/styles";

<<<<<<< HEAD
const Button = ({ type, label }) => {
  const { bgColor, textColor } = styles[type];
  return (
    <button className={`p-3 rounded-sm m-2 text-fifth ${bgColor} ${textColor}`}>
      {label}
=======
const Button = ({ type }) => {
  const { bgColor, textColor, textSize } = styles[type];
  return (
    <button
      className={`p-3 rounded-sm m-2 text-fifth  ${bgColor} ${textColor} ${textSize}`}
    >
      button
>>>>>>> main
    </button>
  );
};

export default Button;
