import { useCallback, useEffect, useState } from "react";
import { useSpring } from "react-spring";

export const useAnimate = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const style = useSpring({
    display: "inline-block",
    transform: isAnimating
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  });

  useEffect(() => {
    if (!isAnimating) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsAnimating(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isAnimating]);
  const trigger = useCallback(() => {
    setIsAnimating(true);
  }, []);

  return [style, trigger];
};
