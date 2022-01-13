import { StyledIntro } from "./styled";
import { FC } from "react";
import { animated, SpringValue } from "react-spring";

interface Props {
  revealStyle: {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
  };
}

export const IntroBackground: FC<Props> = ({ revealStyle }) => {
  return (
    <StyledIntro className="styled-intro">
      <animated.h2
        style={{
          ...revealStyle,
          whiteSpace: "nowrap",
          cursor: "default",
        }}
      >
        Hi there,
      </animated.h2>
      <animated.h2
        style={{
          ...revealStyle,
          cursor: "default",
        }}
      >
        I'm
      </animated.h2>
    </StyledIntro>
  );
};
