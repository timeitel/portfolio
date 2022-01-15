import { useSpring, useSpringRef } from "react-spring";

interface Props {}

export const useReveal = () => {
  const ref = useSpringRef();
  const revealStyle = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 50px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    ref,
  });

  return { revealStyle, ref };
};
