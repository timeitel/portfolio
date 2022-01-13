import { Link } from "common/components";
import { PrimaryButton } from "common/components/Button";
import { FC } from "react";
import { animated, SpringValue } from "react-spring";
import { StyledTitle } from "./styled";

interface Props {
  fadeUpStyle: {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
  };
}

export const IntroForeground: FC<Props> = ({ fadeUpStyle }) => {
  return (
    <StyledTitle className="styled-title" style={{ position: "relative" }}>
      <animated.h1 style={fadeUpStyle}>Tim Eitel</animated.h1>
      <animated.h4 style={fadeUpStyle}>Software Developer</animated.h4>
      <animated.div style={fadeUpStyle}>
        <Link className="styled-cta" href="#about">
          <PrimaryButton size="lg" style={{ marginTop: "2.5vh" }}>
            Find out more
          </PrimaryButton>
        </Link>
      </animated.div>
    </StyledTitle>
  );
};
