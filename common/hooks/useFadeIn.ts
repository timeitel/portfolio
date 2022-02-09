import { useSpring, useSpringRef } from "react-spring";

interface Args {
  trigger?: boolean;
  fromY?: number;
  fromX?: number;
  delay?: number;
}

export const useFadeIn = ({ fromX = 0, fromY = 50, delay }: Args = {}) => {
  const fadeInStyle = useSpring({
    from: { opacity: 0, transform: `translate3d(${fromX}px, ${fromY}px, 0)` },
    opacity: 1,
    transform: `translate3d(0px, 0px, 0)`,
    delay,
  });

  return { fadeInStyle };
};
