import { useSpring, useSpringRef } from "react-spring";

interface Args {
  trigger?: boolean;
  fromY?: number;
  delay?: number;
}

export const useFadeIn = ({ fromY = 50, delay }: Args = {}) => {
  const fadeInStyle = useSpring({
    from: { opacity: 0, transform: `translate3d(0, ${fromY}px, 0)` },
    opacity: 1,
    transform: `translate3d(0, 0px, 0)`,
    delay,
  });

  return { fadeInStyle };
};
