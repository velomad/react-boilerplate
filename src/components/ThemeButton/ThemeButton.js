import React from "react";

const ThemeButton = ({ children }) => {
  return (
    <div className=" flex justify-center">
      <div
        className="w-full text-center font-bold capitalize"
        style={{
          border: "1px solid #f07431",
          backgroundColor: "#fff4ee",
          color: "#f07431",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ThemeButton;
