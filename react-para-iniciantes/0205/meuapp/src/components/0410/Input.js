import React from "react";

function Input({
  label,
  id,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error && <p className="error">{error}</p>}
    </>
  );
}

export default Input;
