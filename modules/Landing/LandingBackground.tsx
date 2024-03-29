import { AnimatedReveal } from "@components/Animated";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import { StyledIntroBackground } from "./styled";

interface Props {}

export const LandingBackground: FC<Props> = ({}) => {
  const {
    color: { blackPrimary },
  } = useTheme();

  return (
    <StyledIntroBackground>
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
  color: ${(p) => p.theme.color.blackPrimary};
`;
