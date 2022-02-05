import { AnimatedReveal } from "@components/Animated";
import { FC } from "react";
import { StyledIntro } from "./styled";

interface Props {}

export const IntroBackground: FC<Props> = ({}) => {
  return (
    <AnimatedReveal>
      <StyledIntro>
        <h2>Hi there,</h2>
        <h2>I'm</h2>
      </StyledIntro>
    </AnimatedReveal>
  );
};
