import React from "react";

const Button = ({ type }) => {
  const getButtonStyle = (type) => {
    switch (type) {
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-secondary";
      case "third":
        return "bg-third";
      case "add_cart":
        return "bg-fourth text-primary";
      case "checkout":
        return "bg-fifth text-primary";
      case "back-top":
        return "bg-fifth border border-primary text-primary";
      default:
        return "bg-primary border border-red-600";
    }
  };
  const btn_classes = getButtonStyle(type);

  return (
    <button className={`p-3 rounded-sm m-2 text-fifth  ${btn_classes}`}>
      button
    </button>
  );
};

export default Button;
