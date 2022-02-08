import { AnimatedReveal } from "@components/Animated";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import { StyledIntroBackground } from "./styled";

interface Props {}

export const IntroBackground: FC<Props> = ({}) => {
  const {
    color: { blackPrimary },
  } = useTheme();

  return (
    <StyledIntroBackground className="styled-intro">
      <AnimatedReveal backgroundColor={blackPrimary} delay={350}>
        <StyledHiThere>Hi there,</StyledHiThere>
      </AnimatedReveal>
      <AnimatedReveal delay={700}>
        <StyledHiThere>my name's</StyledHiThere>
      </AnimatedReveal>
    </StyledIntroBackground>
  );
};

const StyledHiThere = styled.h2`
  font-family: "Kanit";
  margin: 0;
`;
