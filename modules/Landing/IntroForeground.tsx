import { Link } from "@components/Link";
import { useFadeIn } from "@hooks";
import { PrimaryButton } from "common/components/Button";
import { FC } from "react";
import { animated } from "react-spring";
import { StyledTitle } from "./styled";

interface Props {}

export const IntroForeground: FC<Props> = ({}) => {
  const { fadeInStyle } = useFadeIn({ delay: 2200 });
  return (
    <StyledTitle className="styled-title" style={{ position: "relative" }}>
      <animated.div style={fadeInStyle}>
        <h1>Tim Eitel</h1>
        <h4>Software Developer</h4>
        <Link className="styled-cta" href="#about">
          <PrimaryButton size="lg" className="primary-btn">
            Find out more
          </PrimaryButton>
        </Link>
      </animated.div>
    </StyledTitle>
  );
};
