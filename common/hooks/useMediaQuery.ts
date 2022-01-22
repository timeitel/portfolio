import { buildMediaQuery, IBuildMediaQuery } from "@utils";
import { useEffect, useState } from "react";

export const useMediaQuery = (mediaQuery: IBuildMediaQuery): boolean => {
  const query = buildMediaQuery(mediaQuery).replace("@media ", "");

  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));
  const handleChange = () => setMatches(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};
