import { AnimatedReveal } from "@components/Animated";
import { useTheme } from "@emotion/react";
import React, { FC } from "react";
import { IntroBackground } from "./IntroBackground";
import { StyledIntro, StyledSection } from "./styled";

interface Props {}

export const Landing: FC<Props> = () => {
  return (
    <StyledSection style={{ height: "100vh", position: "relative" }}>
      <IntroBackground />

      {/* <StyledTitle className="styled-title" style={{ position: "relative" }}>
        <animated.h1 style={fadeInStyle}>Tim Eitel</animated.h1>
        <animated.h4 style={fadeInStyle}>Software Developer</animated.h4>
        <animated.div style={fadeInStyle}>
          <Link href="#about">
            <PrimaryButton size="lg" className="primary-btn">
              Find out more
            </PrimaryButton>
          </Link>
        </animated.div>
      </StyledTitle> */}
    </StyledSection>
  );
};
