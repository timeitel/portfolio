import { FC, useState } from "react";
import { animated, useSpring, useTransition } from "react-spring";

interface Props {}

export const AnimatedReveal: FC<Props> = ({ children }) => {
  const [show, set] = useState(false);
  const styles = useSpring({
    from: { opacity: 0, transform: `translate3d(0, ${50}px, 0)` },
    enter: { opacity: 1, transform: `translate3d(0, ${0}px, 0)` },
    reverse: show,
    delay: 200,
    onRest: () => set(true),
  });
  const transitions = useTransition(show, {
    from: { opacity: 0, transform: `translate3d(0, ${50}px, 0)` },
    enter: { opacity: 1, transform: `translate3d(0, ${0}px, 0)` },
    reverse: show,
    delay: 200,
    onRest: () => set(true),
  });

  return (
    <animated.div style={styles}>
      {transitions(
        (styles, show) =>
          show && <animated.div style={styles}>{children}</animated.div>
      )}
    </animated.div>
  );
};
