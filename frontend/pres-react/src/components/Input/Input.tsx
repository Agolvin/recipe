import React from "react";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <label>
      <p>{label}</p>
      <input {...props} className="border " />
    </label>
  );
};

export default Input;
