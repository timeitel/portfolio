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
  const outlineStyles = useSpring({
    from: { opacity: 0, transform: `rotate(315deg)`, left: "50%" },
    opacity: 1,
    transform: `rotate(0deg)`,
    left: largeScreen ? "35%" : "20%",
    delay: 2500,
    config: { tension: 800, friction: 400 },
  });
  const filledStyles = useSpring({
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

  return (
    <>
      <animated.div
        style={{
          ...outlineStyles,
          position: "absolute",
          top: largeScreen ? "28%" : "32%",
          zIndex: 1,
        }}
      >
        <TriangleIcon color={blue600} />
      </animated.div>
      <animated.div
        style={{
          ...filledStyles,
          position: "absolute",
          left: "55%",
          zIndex: 1,
        }}
      >
        <TriangleIcon
          fill={blackPrimary}
          color={blackPrimary}
          height="1.25rem"
          width="1.25rem"
        />
      </animated.div>
    </>
  );
};
