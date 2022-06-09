import React from "react";

const Button = ({
  bgColor,
  color,
  size,
  text,
  borderRadius,
  onClick,
  ...rest
}) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius, ...rest }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
