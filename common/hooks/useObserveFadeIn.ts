import { useIntersectionObserver, UseIntersectionObserverArgs } from "@hooks";
import { useRef } from "react";
import { config, useSpring } from "react-spring";

interface Args {
  fromY?: number;
  toY?: number;
  intersectionOptions?: Omit<UseIntersectionObserverArgs, "ref">;
}

export const useObserveFadeIn = ({
  fromY = 50,
  toY = 0,
  intersectionOptions = {},
}: Args = {}) => {
  const intersectionRef = useRef(null);
  const fadeInRef = useIntersectionObserver({
    ref: intersectionRef,
    ...intersectionOptions,
  });
  const fadeInStyle = useSpring({
    opacity: fadeInRef?.isIntersecting ? 1 : 0,
    transform: fadeInRef?.isIntersecting
      ? `translate3d(0, ${toY}px, 0)`
      : `translate3d(0, ${fromY}px, 0)`,
    config: config.slow,
  });

  return { intersectionRef, fadeInStyle };
};
