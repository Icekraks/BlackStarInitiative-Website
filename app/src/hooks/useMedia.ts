import { useMediaQuery } from "react-responsive";

import tailwind from "./../../tailwind.config";

const useMedia = () => {
  const breakpoints = tailwind.theme.screens;

  const queries = {
    isBase: useMediaQuery({ query: "(min-width: 0px)" }),
    isSm: useMediaQuery({
      query: `(min-width: ${breakpoints.sm})`,
    }),
    isMd: useMediaQuery({
      query: `(min-width: ${breakpoints.md})`,
    }),
    isLg: useMediaQuery({
      query: `(min-width: ${breakpoints.lg})`,
    }),
    isXl: useMediaQuery({
      query: `(min-width: ${breakpoints.xl})`,
    }),
    is2xl: useMediaQuery({
      query: `(min-width: ${breakpoints["xl"]})`,
    }),
    touch: useMediaQuery({ query: "(hover: none)" }),
  };

  return queries;
};

export { useMedia };
