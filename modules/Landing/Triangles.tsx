import { TriangleIcon } from "@components/Icons";
import { useTheme } from "@emotion/react";
import { FC } from "react";
import { animated, useSpring } from "react-spring";

interface Props {}

export const Triangles: FC<Props> = ({}) => {
  const {
    color: { blackPrimary, blue600 },
  } = useTheme();
  const outlineStyles = useSpring({
    from: { opacity: 0, transform: `rotate(360deg)`, left: "55%" },
    opacity: 1,
    transform: `rotate(0deg)`,
    left: "35%",
    delay: 2500,
    config: { tension: 530, friction: 300 },
  });
  const filledStyles = useSpring({
    from: { opacity: 0, transform: `rotate(90deg)`, top: "20%" },
    opacity: 1,
    transform: `rotate(0deg)`,
    top: "22%",
    delay: 3500,
    config: { tension: 530, friction: 100 },
  });

  return (
    <>
      <animated.div
        style={{ ...outlineStyles, position: "absolute", top: "30%" }}
      >
        <TriangleIcon color={blue600} />
      </animated.div>
      <animated.div
        style={{
          ...filledStyles,
          position: "absolute",
          left: "55%",
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
