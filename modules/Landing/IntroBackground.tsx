import { AnimatedReveal } from "@components/Animated";
import { useTheme } from "@emotion/react";
import { FC } from "react";
import { StyledIntro } from "./styled";

interface Props {}

export const IntroBackground: FC<Props> = ({}) => {
  const {
    color: { blackPrimary },
  } = useTheme();

  return (
    <StyledIntro className="styled-intro">
      <AnimatedReveal backgroundColor={blackPrimary} delay={450}>
        <h2>Hi there,</h2>
      </AnimatedReveal>
      <AnimatedReveal delay={800}>
        <h2>I'm</h2>
      </AnimatedReveal>
    </StyledIntro>
  );
};
