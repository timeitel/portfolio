import { useEffect, useState } from "react";

export const useRevealText = () => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (reveal) return;

    const timeoutId = window.setTimeout(() => {
      setReveal(true);
    }, 700);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return reveal;
};
