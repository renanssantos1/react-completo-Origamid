import React from "react";

function Radio({ pergunta, id, options, value, onChange }) {
  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        border: "2px solid #eee",
      }}
    >
      <legend> {pergunta}</legend>

      {options.map((option) => (
        <label
          key={option}
          htmlFor={id}
          style={{ marginBottom: "1rem", fontFamily: "monospace" }}
        >
          <input
            type="radio"
            value={option}
            id={id}
            onChange={onChange}
            checked={value === option}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}

export default Radio;
