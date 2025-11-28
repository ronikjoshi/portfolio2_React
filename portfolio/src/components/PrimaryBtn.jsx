import React from "react";

const PrimaryBtn = ({ children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2
        font-semibold
        rounded-md
        uppercase
        flex items-center justify-center
        border-2 border-primary
        bg-primary text-white
        transition-all duration-300
        hover:bg-transparent hover:text-primary
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
