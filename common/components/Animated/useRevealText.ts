import { useEffect, useState } from "react";

export const useRevealText = (trigger: boolean) => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (reveal || !trigger) return;

    const timeoutId = window.setTimeout(() => {
      setReveal(true);
    }, 375);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [trigger]);

  return reveal;
};
