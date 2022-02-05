import { AnimatedReveal } from "@components/Animated";
import { FC } from "react";
import { StyledIntro } from "./styled";

interface Props {}

export const IntroBackground: FC<Props> = ({}) => {
  return (
    <StyledIntro className="styled-intro">
      <AnimatedReveal>
        <h2>Hi there,</h2>
        <h2>I'm</h2>
      </AnimatedReveal>
    </StyledIntro>
  );
};
