// theme.js (you can call it whatever you want)

import { COLORS } from "./mainTheme";

export const textVariant = {
  gray200: `text-gray-500`,
  gray: `text-gray-700`,
  gray100: `text-gray-300`,
  white: `text-gray-100`,
  black: `text-black`,
  primary: `${COLORS.primary}`,
  infoDark: `text-indigo-700`,
  danger: `text-red-600`,
  blue: `text-blue-700`,
};

export const textSize = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xl2: "text-2xl",
  xl3: "text-3xl",
  xl4: "text-4xl",
  xl5: "text-5xl",
  xl6: "text-6xl",
};

export const textWeight = {
  400: "font-normal",
  500: "font-medium",
  600: "font-semibold",
  700: "font-bold",
  800: "font-extrabold",
};