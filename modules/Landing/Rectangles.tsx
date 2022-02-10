import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { FC } from "react";
import { animated, useSpring } from "react-spring";

interface Props {}

export const Rectangles: FC<Props> = ({}) => {
  const largeScreen = useMediaQuery({ min: "laptop" });
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
          top: largeScreen ? "45%" : "32%",
          left: largeScreen ? "12%" : "20%",
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
          bottom: largeScreen ? "15%" : "20%",
          left: "55%",
          height: "5px",
          backgroundColor: blackPrimary,
        }}
      >
        <div />
      </animated.div>
    </>
  );
};
