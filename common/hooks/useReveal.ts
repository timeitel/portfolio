import { Lookup } from "@react-spring/types";
import { SpringRef, useSpring } from "react-spring";

interface Props {
  ref?: SpringRef<Lookup<any>>;
}

export const useReveal = ({ ref }: Props = {}) => {
  const fadeUp = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 50px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    ref: ref,
  });

  return fadeUp;
};
