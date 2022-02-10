import { TriangleIcon } from "@components/Icons";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { FC } from "react";
import { animated, useSpring } from "react-spring";

interface Props {}

export const Triangles: FC<Props> = ({}) => {
  const largeScreen = useMediaQuery({ min: "laptop" });
  const {
    color: { blackPrimary, blue600 },
  } = useTheme();
  const outlineTriangle = useSpring({
    from: { opacity: 0, transform: `rotate(315deg)`, left: "50%" },
    opacity: 1,
    transform: `rotate(0deg)`,
    left: largeScreen ? "35%" : "20%",
    delay: 2500,
    config: { tension: 800, friction: 400 },
  });
  const filledTriangle = useSpring({
    from: {
      opacity: 0,
      transform: `rotate(90deg)`,
      top: largeScreen ? "20%" : "12%",
    },
    opacity: 1,
    transform: `rotate(0deg)`,
    top: largeScreen ? "22%" : "14%",
    delay: 3500,
    config: { tension: 530, friction: 100 },
  });
  const bottomTriangle = useSpring({
    from: {
      opacity: 0,
      transform: `rotate(40deg)`,
      bottom: largeScreen ? "20%" : "30%",
      right: largeScreen ? "25%" : "25%",
    },
    opacity: 1,
    transform: `rotate(0deg)`,
    bottom: largeScreen ? "18%" : "28%",
    right: largeScreen ? "23%" : "25%",
    delay: 3550,
    config: { tension: 130, friction: 55 },
  });

  return (
    <>
      <animated.div
        style={{
          ...outlineTriangle,
          position: "absolute",
          top: largeScreen ? "28%" : "32%",
          zIndex: 1,
        }}
      >
        <TriangleIcon color={blue600} height="1.3rem" width="1.3rem" />
      </animated.div>
      <animated.div
        style={{
          ...filledTriangle,
          position: "absolute",
          left: "55%",
          zIndex: 1,
        }}
      >
        <TriangleIcon
          fill={blackPrimary}
          color={blackPrimary}
          height="1.2rem"
          width="1.2rem"
        />
      </animated.div>

      <animated.div
        style={{
          ...bottomTriangle,
          position: "absolute",
          zIndex: 1,
        }}
      >
        <TriangleIcon color={blackPrimary} height="1.75rem" width="1.75rem" />
      </animated.div>
    </>
  );
};
