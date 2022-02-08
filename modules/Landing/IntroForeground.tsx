import { Link } from "@components/Link";
import styled from "@emotion/styled";
import { useFadeIn } from "@hooks";
import { PrimaryButton } from "common/components/Button";
import { FC } from "react";
import { animated } from "react-spring";
import { StyledTitle } from "./styled";

interface Props {}

export const IntroForeground: FC<Props> = ({}) => {
  const { fadeInStyle } = useFadeIn({ delay: 2000 });
  return (
    <StyledTitle style={{ position: "relative" }}>
      <animated.div style={fadeInStyle}>
        <h1>Tim Eitel</h1>
        <h4>Software Developer</h4>
        <StyledLink href="#about">
          <PrimaryButton size="lg">Find out more</PrimaryButton>
        </StyledLink>
      </animated.div>
    </StyledTitle>
  );
};

const StyledLink = styled(Link)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 85%);
  margin-top: 2.5vh;
`;
