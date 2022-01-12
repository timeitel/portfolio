import { Link } from "common/components";
import { PrimaryButton } from "common/components/Button";
import { useFadeUp } from "common/hooks";
import React, { FC } from "react";
import { animated } from "react-spring";
import { StyledIntro, StyledSection, StyledTitle } from "./styled";

interface Props {}

export const Landing: FC<Props> = () => {
  const fadeUp = useFadeUp();

  return (
    <StyledSection style={{ height: "100vh", position: "relative" }}>
      <StyledIntro className="styled-intro">
        <h2
          style={{
            whiteSpace: "nowrap",
            cursor: "default",
          }}
        >
          Hi there,
        </h2>
        <h2 style={{ cursor: "default" }}>I'm</h2>
      </StyledIntro>
      <StyledTitle className="styled-title" style={{ position: "relative" }}>
        <animated.h1 style={fadeUp}>Tim Eitel</animated.h1>
        <animated.h4 style={fadeUp}>Software Developer</animated.h4>
        <animated.div style={fadeUp}>
          <Link className="styled-cta" href="#about">
            <PrimaryButton size="lg" style={{ marginTop: "2.5vh" }}>
              Find out more
            </PrimaryButton>
          </Link>
        </animated.div>
      </StyledTitle>
    </StyledSection>
  );
};
