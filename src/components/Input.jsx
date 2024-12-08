import React from "react";
import { useContext } from "react";
import InputContext from "../context/inputContext";

const Input = () => {
  const { label, type, placeholder, handleChange } = useContext(InputContext);
  return (
    <div className="my-3 flex justify-between p-3 items-center">
      <label htmlFor="text-input" id="text-input-label">
        {label}
      </label>
      <input
        className="border border-gray-900 rounded-md p-3"
        type={type}
        placeholder={placeholder}
        onChange={(event) => {
          handleChange(event);
          // handleChange(event);
        }}
      />
    </div>
  );
};

export default Input;
