import { FC, useState } from "react";
import { animated, useSpring } from "react-spring";
import { useRevealText } from "./useRevealText";

interface Props {
  backgroundColor?: string;
}

const REVEAL_CONFIG = {
  tension: 530,
  friction: 44,
};

export const AnimatedReveal: FC<Props> = ({
  children,
  backgroundColor = "black",
}) => {
  const [swipeEnd, setSwipeEnd] = useState(false);
  const revealText = useRevealText();
  const swipeStyles = useSpring({
    from: {
      left: "0%",
      right: "100%",
    },
    to: [
      { left: "0%", right: "0%" },
      { left: "100%", right: "0%" },
    ],
    config: REVEAL_CONFIG,
    delay: 450,
    onRest: () => setSwipeEnd(true),
  });

  return (
    <div style={{ position: "relative" }}>
      <div style={{ opacity: revealText ? 1 : 0 }}>{children}</div>
      <animated.div
        style={{
          ...(!swipeEnd && { ...swipeStyles }),
          position: "absolute",
          backgroundColor,
          top: "-5%",
          bottom: "-5%",
        }}
      />
    </div>
  );
};
