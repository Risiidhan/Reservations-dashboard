"use client";

import { useEffect, useState } from "react";

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

const screens = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
};

const useMediaQuery = (
  target: keyof typeof screens,
  defaultValue?: boolean,
) => {
  const [matches, setMatches] = useState(defaultValue ?? false);

  useEffect(() => {
    const query = window.matchMedia(screens[target]);
    const checkMediaQuery = (e: MediaQueryListEvent | MediaQueryList) => {
      setMatches(e.matches);
    };

    checkMediaQuery(query);

    query.addEventListener("change", checkMediaQuery);
    return () => {
      query.removeEventListener("change", checkMediaQuery);
    };
  }, [target]);

  return matches;
};

export default useMediaQuery;
