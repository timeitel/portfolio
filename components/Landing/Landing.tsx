import React, { FC } from "react";
import { StyledCta, StyledIntro, StyledSection, StyledTitle } from "./styled";

interface Props {}

export const Landing: FC<Props> = () => {
  return (
    <StyledSection className="h-screen relative">
      <StyledIntro>
        <h2 style={{ whiteSpace: "nowrap" }}>Hi there,</h2>
        <h2>I'm</h2>
      </StyledIntro>
      <StyledTitle>
        <h1>Tim Eitel</h1>
        <h4>Software Developer</h4>
        <StyledCta primary href="#about">
          Find out more
        </StyledCta>
      </StyledTitle>
    </StyledSection>
  );
};
