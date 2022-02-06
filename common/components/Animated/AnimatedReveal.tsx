import { FC, useEffect, useState } from "react";
import { animated, SpringRef, useSpring } from "react-spring";
import { useRevealText } from "./useRevealText";

interface Props {
  backgroundColor?: string;
  delay: number;
}

const REVEAL_CONFIG = {
  tension: 530,
  friction: 44,
};

export const AnimatedReveal: FC<Props> = ({
  children,
  backgroundColor = "black",
  delay,
}) => {
  const [paused, setPaused] = useState(false);
  const [triggerRevealText, setTriggerRevealText] = useState(false);
  const revealText = useRevealText(triggerRevealText);
  const [swipeStyles, api] = useSpring(() => ({
    from: {
      left: "-5%",
      right: "105%",
    },
    to: [
      { left: "-5%", right: "-5%" },
      { left: "105%", right: "-5%" },
    ],
    config: REVEAL_CONFIG,
    onStart: () => setTriggerRevealText(true),
    onProps: (props: any) => {
      if (props.to?.right === "-5%" && !paused) {
        setPaused(true);
        api.pause();
        setTimeout(() => {
          api.resume();
          setPaused(false);
        }, 400);
      }
    },
    delay,
  }));

  return (
    <div style={{ position: "relative" }}>
      <div style={{ opacity: revealText ? 1 : 0 }}>{children}</div>
      <animated.div
        style={{
          ...swipeStyles,
          position: "absolute",
          backgroundColor,
          top: "-5%",
          bottom: "-5%",
        }}
      />
    </div>
  );
};
