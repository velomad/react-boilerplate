import React from "react";
import { COLORS } from "../../theme/mainTheme";

const ThemeButton = ({ children }) => {
  return (
    <div
      className="w-full py-2 text-center font-bold capitalize"
      style={{
        border: `1px solid ${COLORS.primary}`,
        backgroundColor: "#fff4ee",
        color: COLORS.secondary,
      }}
    >
      {children}
    </div>
  );
};

export default ThemeButton;
