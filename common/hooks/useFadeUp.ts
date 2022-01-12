import { useSpring } from "react-spring";

export const useFadeUp = () => {
  const fadeUp = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 50px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
  });

  return fadeUp;
};
