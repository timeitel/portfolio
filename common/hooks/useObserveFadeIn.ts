import { useIntersectionObserver } from "@hooks";
import { useRef } from "react";
import { useSpring } from "react-spring";

interface Args {
  fromY?: number;
  toY?: number;
}

export const useObserveFadeIn = ({ fromY = 50, toY = 0 }: Args = {}) => {
  const intersectionRef: any = useRef();
  const fadeInRef = useIntersectionObserver(intersectionRef);
  const fadeInStyle = useSpring({
    opacity: fadeInRef?.isIntersecting ? 1 : 0,
    transform: fadeInRef?.isIntersecting
      ? `translate3d(0, ${toY}px, 0)`
      : `translate3d(0, ${fromY}px, 0)`,
  });

  return { intersectionRef, fadeInStyle };
};
