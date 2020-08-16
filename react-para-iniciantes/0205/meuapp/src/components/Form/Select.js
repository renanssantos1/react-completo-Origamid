import React from "react";

function Select({ options, value, setValue, ...props }) {
  return (
    <>
      <select
        value={value}
        name=""
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
