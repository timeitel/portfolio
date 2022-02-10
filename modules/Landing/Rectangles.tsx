import { useTheme } from "@emotion/react";
import { FC } from "react";
import { animated, useSpring } from "react-spring";

interface Props {}

export const Rectangles: FC<Props> = ({}) => {
  const {
    color: { blackPrimary },
  } = useTheme();
  const leftRectangle = useSpring({
    from: { opacity: 0, height: "0px" },
    opacity: 1,
    height: "70px",
    delay: 3500,
    config: { tension: 230, friction: 100 },
  });
  const bottomRectangle = useSpring({
    from: {
      opacity: 0,
      width: "0px",
    },
    opacity: 1,
    width: "125px",
    delay: 3550,
    config: { tension: 130, friction: 75 },
  });

  return (
    <>
      <animated.div
        style={{
          ...leftRectangle,
          position: "absolute",
          top: "45%",
          left: "12%",
          backgroundColor: blackPrimary,
          width: "3px",
        }}
      >
        <div />
      </animated.div>
      <animated.div
        style={{
          ...bottomRectangle,
          position: "absolute",
          bottom: "15%",
          left: "65%",
          height: "5px",
          backgroundColor: blackPrimary,
        }}
      >
        <div />
      </animated.div>
    </>
  );
};
