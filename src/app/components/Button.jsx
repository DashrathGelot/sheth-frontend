import React from "react";
import { AddButton } from "./AddButton";

const Button = ({ disabled, onClick, pending, name, className }) => {
  return <AddButton disabled={disabled} onClick={onClick} pending={pending} name={name} className={className}/>;
};

export default Button;
