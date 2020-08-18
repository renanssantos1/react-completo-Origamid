import React from "react";

function Input({ label, id, value, onChange, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} onChange={onChange} {...props} />
    </>
  );
}

export default Input;
