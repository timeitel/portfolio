import React, { FC } from "react";
import styled from "@emotion/styled";
import { StyledCta, StyledIntro, StyledSection, StyledTitle } from "./styled";

interface Props {}

export const Landing: FC<Props> = () => {
  return (
    <StyledSection style={{ height: "100vh", position: "relative" }}>
      <StyledIntro className="styled-intro">
        <h2 style={{ whiteSpace: "nowrap" }}>Hi there,</h2>
        <h2>I'm</h2>
      </StyledIntro>
      <StyledTitle className="styled-title">
        <h1>Tim Eitel</h1>
        <h4>Software Developer</h4>
        <StyledCta className="styled-cta" href="#about">
          Find out more
        </StyledCta>
      </StyledTitle>
    </StyledSection>
  );
};
