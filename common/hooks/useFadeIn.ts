import { useSpring, useSpringRef } from "react-spring";

interface Args {
  trigger?: boolean;
  fromY?: number;
  toY?: number;
}

export const useFadeIn = ({ fromY = 50, toY = 0 }: Args = {}) => {
  const ref = useSpringRef();
  const fadeInStyle = useSpring({
    from: { opacity: 0, transform: `translate3d(0, ${fromY}px, 0)` },
    opacity: 1,
    transform: `translate3d(0, ${toY}px, 0)`,
    ref,
  });

  return { fadeInStyle, ref };
};
