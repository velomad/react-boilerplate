import { useEffect, useState, useRef, useMemo } from "react";
import React from "react";
import { COLORS } from "../../../../theme/mainTheme";
import { Circles, Drawer } from "./components";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(true);
  };

  const drawerClose = () => {
    setDrawer(false);
  };

  return (
    <React.Fragment>
      <Drawer isOpen={drawer} close={drawerClose} />
      <header style={{ backgroundColor: COLORS.primary }}>
        <div className="flex justify-between px-32 items-center py-4 md:py-2">
          <div className="flex relative items-center">
            <svg
              onClick={handleDrawer}
              className="h-8 w-8 absolute -left-24 text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <div>
              <img src="https://asset20.ckassets.com/wp/wp-content/uploads/sites/37/2020/04/5e8dbdd7383b9.png" />
            </div>
          </div>
          <div className="hidden md:block">
            <Circles />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
