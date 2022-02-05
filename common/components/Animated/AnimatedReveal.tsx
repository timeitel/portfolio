import { StyledIntro } from "@modules/Landing/styled";
import { FC } from "react";
import { animated, config, useSpring } from "react-spring";

interface Props {}

export const AnimatedReveal: FC<Props> = ({ children }) => {
  const styles = useSpring({
    to: async (next) => {
      await next({
        opacity: 1,
        color: "rgb(14,26,19)",
        transform: `translate3d(20px, -50px, 100px)`,
      });
      await next({ color: "green" });
    },
    from: { opacity: 0, color: "red", transform: `translate3d(0px, 0px, 0px)` },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};
