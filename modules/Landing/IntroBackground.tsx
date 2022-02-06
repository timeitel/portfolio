import { AnimatedReveal } from "@components/Animated";
import { useTheme } from "@emotion/react";
import { FC } from "react";
import { useChain, useSpringRef } from "react-spring";
import { StyledIntro } from "./styled";

interface Props {}

export const IntroBackground: FC<Props> = ({}) => {
  const {
    color: { blackPrimary },
  } = useTheme();
  const refOne = useSpringRef();
  const refTwo = useSpringRef();
  useChain([refOne, refTwo], [0.45, 0.8]);

  return (
    <StyledIntro className="styled-intro">
      <AnimatedReveal backgroundColor={blackPrimary} springRef={refOne}>
        <h2>Hi there,</h2>
      </AnimatedReveal>
      <AnimatedReveal springRef={refTwo}>
        <h2>I'm</h2>
      </AnimatedReveal>
    </StyledIntro>
  );
};
