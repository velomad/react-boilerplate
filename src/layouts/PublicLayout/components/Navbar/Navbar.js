import { useEffect, useState, useRef, useMemo } from "react";
import React from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Navbar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  return useMemo(
    () => (
      <header>
        <div className="">navbar</div>
      </header>
    ),
    [hideOnScroll]
  );
};

export default Navbar;
