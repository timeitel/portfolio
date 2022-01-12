import { useFadeUp, useReveal } from "common/hooks";
import { IntroBackground } from "modules/Landing/IntroBackground";
import { IntroForeground } from "modules/Landing/IntroForeground";
import React, { FC } from "react";
import { useChain, useSpringRef } from "react-spring";
import { StyledSection } from "./styled";

interface Props {}

export const Landing: FC<Props> = () => {
  const fadeUpRef = useSpringRef();
  const fadeUp = useFadeUp({ ref: fadeUpRef });

  const revealRef = useSpringRef();
  const reveal = useReveal({ ref: revealRef });

  useChain([revealRef, fadeUpRef]);

  return (
    <StyledSection style={{ height: "100vh", position: "relative" }}>
      <IntroBackground {...reveal} />
      <IntroForeground {...fadeUp} />
    </StyledSection>
  );
};
