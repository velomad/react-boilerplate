import React from "react";
import { COLORS } from "../../theme/mainTheme";

const ThemeButton = ({ children }) => {
  return (
    <div className=" flex justify-center">
      <div
        className="w-full text-center font-bold capitalize"
        style={{
          border: `1px solid ${COLORS.primary}`,
          backgroundColor: "#fff4ee",
          color: COLORS.secondary,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ThemeButton;
