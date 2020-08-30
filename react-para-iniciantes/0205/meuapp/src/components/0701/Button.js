import React from "react";
import PropTypes from "prop-types";

function Button({ children, width, margin }) {
  return (
    <button
      style={{
        margin: margin,
        width: `${width}px`,
        height: `${width / 3}px`,
      }}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  margin: "10px",
};

Button.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Button;
