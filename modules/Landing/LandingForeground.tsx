import { useFadeIn } from "@hooks";
import { FC } from "react";
import { animated } from "react-spring";
import { StyledButton, StyledTitle } from "./styled";

interface Props {}

export const LandingForeground: FC<Props> = ({}) => {
  const { fadeInStyle } = useFadeIn({ delay: 2000 });
  return (
    <StyledTitle style={{ position: "relative" }}>
      <animated.div style={fadeInStyle}>
        <h1>Tim Eitel</h1>
        <h4>Software Developer</h4>

        <StyledButton href="#about" size="lg">
          Find out more
        </StyledButton>
      </animated.div>
    </StyledTitle>
  );
};
