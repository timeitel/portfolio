import { useFadeIn } from "@hooks";
import { FC } from "react";
import { scroller } from "react-scroll";
import { animated } from "react-spring";
import { StyledButton, StyledTitle } from "./styled";

interface Props {}

export const LandingForeground: FC<Props> = ({}) => {
  const { fadeInStyle } = useFadeIn({ delay: 2000 });
  const scrollTo = (to: string, offset = -100) => {
    scroller.scrollTo(to, { smooth: true, offset });
  };
  return (
    <StyledTitle style={{ position: "relative", zIndex: 2 }}>
      <animated.div style={fadeInStyle}>
        <h1>Tim Eitel</h1>
        <h4>Software Developer</h4>

        <StyledButton size="lg" onClick={() => scrollTo("about")}>
          Find out more
        </StyledButton>
      </animated.div>
    </StyledTitle>
  );
};
