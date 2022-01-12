import { StyledIntro } from "./styled";
import { FC } from "react";
import { animated, SpringValue } from "react-spring";

interface Props {
  opacity: SpringValue<number>;
  transform: SpringValue<string>;
}

export const IntroBackground: FC<Props> = ({ ...reveal }) => {
  return (
    <StyledIntro className="styled-intro">
      <animated.h2
        style={{
          ...reveal,
          whiteSpace: "nowrap",
          cursor: "default",
        }}
      >
        Hi there,
      </animated.h2>
      <animated.h2
        style={{
          ...reveal,
          cursor: "default",
        }}
      >
        I'm
      </animated.h2>
    </StyledIntro>
  );
};
