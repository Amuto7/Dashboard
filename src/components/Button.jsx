import React from "react";

const Button = ({ bgColor, color, text, size, borderRadius ,icon,costomC,fun}) => {
  return (
    <div>
      <button
        type="botton"
        style={{ backgroundColor: bgColor, color, borderRadius }}
        className={`text-${size} p-3 hover:bg-light-gray hover:drop-shadow-xl ${costomC} `}
        onClick={fun}
      >
        {text}
        {icon}
      </button>
    </div>
  );
};

export default Button;
