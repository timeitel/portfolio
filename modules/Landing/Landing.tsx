import { useFadeUp, useReveal } from "@hooks";
import React, { FC } from "react";
import { useChain } from "react-spring";
import { IntroBackground } from "./IntroBackground";
import { IntroForeground } from "./IntroForeground";
import { StyledSection } from "./styled";

interface Props {}

export const Landing: FC<Props> = () => {
  const { fadeUpStyle, ref: foregroundRef } = useFadeUp();
  const { revealStyle, ref: backgroundRef } = useReveal();
  useChain([backgroundRef, foregroundRef]);

  return (
    <StyledSection style={{ height: "100vh", position: "relative" }}>
      <IntroBackground revealStyle={revealStyle} />
      <IntroForeground fadeUpStyle={fadeUpStyle} />
    </StyledSection>
  );
};
