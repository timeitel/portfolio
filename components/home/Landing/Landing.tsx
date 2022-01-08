import { PrimaryButton } from "@common/Button";
import React, { FC } from "react";
import { StyledCta, StyledIntro, StyledSection, StyledTitle } from "./styled";

interface Props {}

export const Landing: FC<Props> = () => {
  return (
    <StyledSection style={{ height: "100vh", position: "relative" }}>
      <StyledIntro className="styled-intro">
        <h2 style={{ whiteSpace: "nowrap", cursor: "default" }}>Hi there,</h2>
        <h2 style={{ cursor: "default" }}>I'm</h2>
      </StyledIntro>
      <StyledTitle className="styled-title">
        <h1>Tim Eitel</h1>
        <h4>Software Developer</h4>
        <StyledCta className="styled-cta" href="#about">
          <PrimaryButton size="lg">Find out more</PrimaryButton>
        </StyledCta>
      </StyledTitle>
    </StyledSection>
  );
};
