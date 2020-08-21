import React from "react";

function Radio({ pergunta, options, id, value, active, onChange }) {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        border: "2px solid #eee",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: "1rem", fontFamily: "monospace" }}
        >
          <input
            type="radio"
            value={option}
            id={id}
            checked={value === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}

export default Radio;
