import { FC, forwardRef, useState } from "react";
import { animated, SpringRef, useSpring } from "react-spring";
import { useRevealText } from "./useRevealText";

interface Props {
  backgroundColor?: string;
  springRef: SpringRef;
  delay: number;
}

const REVEAL_CONFIG = {
  tension: 530,
  friction: 44,
};

export const AnimatedReveal: FC<Props> = ({
  children,
  backgroundColor = "black",
  springRef,
  delay,
}) => {
  const [triggerRevealText, setTriggerRevealText] = useState(false);
  const [swipeEnd, setSwipeEnd] = useState(false);
  const revealText = useRevealText(triggerRevealText);
  const swipeStyles = useSpring({
    from: {
      left: "-5%",
      right: "105%",
    },
    to: [
      { left: "-5%", right: "-5%" },
      { left: "105%", right: "-5%" },
    ],
    config: REVEAL_CONFIG,
    delay: delay,
    onRest: () => setSwipeEnd(true),
    onStart: () => setTriggerRevealText(true),
    ref: springRef,
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
