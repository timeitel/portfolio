import { Link } from "common/components";
import { PrimaryButton } from "common/components/Button";
import { useFadeUp, useReveal } from "common/hooks";
import React, { FC } from "react";
import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from "react-spring";
import { StyledIntro, StyledSection, StyledTitle } from "./styled";

interface Props {}

export const Landing: FC<Props> = () => {
  const fadeUpRef = useSpringRef();
  const fadeUp = useFadeUp({ ref: fadeUpRef });

  const revealRef = useSpringRef();
  const reveal = useReveal({ ref: revealRef });

  useChain([revealRef, fadeUpRef]);

  return (
    <StyledSection style={{ height: "100vh", position: "relative" }}>
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
