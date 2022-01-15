import { useEffect } from "react";
import { useSpring, useSpringRef } from "react-spring";

interface Args {
  trigger?: boolean;
  fromY?: number;
  toY?: number;
}

export const useFadeUp = ({
  trigger = true,
  fromY = 50,
  toY = 0,
}: Args = {}) => {
  const ref = useSpringRef();
  const fadeUpStyle = useSpring({
    from: { opacity: 0, transform: `translate3d(0, ${fromY}px, 0)` },
    opacity: trigger ? 1 : 0,
    transform: trigger
      ? `translate3d(0, ${toY}px, 0)`
      : `translate3d(0, ${fromY}px, 0)`,
    ref,
  });

  return { fadeUpStyle, ref };
};
