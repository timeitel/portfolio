import {
  GithubContainedIcon,
  LinkedInContainedIcon,
  TriangleCtaIcon,
} from "@components/Icons";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useFadeIn } from "@hooks";
import { FC } from "react";
import { animated } from "react-spring";

interface Props {}

export const LandingSocials: FC<Props> = ({}) => {
  const {
    color: { whitePrimary, whiteSecondary },
  } = useTheme();

  const { fadeInStyle: firstStyle } = useFadeIn({
    delay: 2200,
    fromY: 0,
    fromX: -100,
  });
  const { fadeInStyle: secondStyle } = useFadeIn({
    delay: 2350,
    fromY: 0,
    fromX: -100,
  });
  const { fadeInStyle: thirdStyle } = useFadeIn({
    delay: 2500,
    fromY: 0,
    fromX: -100,
  });

  return (
    <>
      <StyledLeftSocials>
        <animated.div style={secondStyle}>
          <StyledLink>
            <LinkedInContainedIcon color={whiteSecondary} />
            <span style={{ color: whitePrimary, margin: "0 0.5rem" }}>--</span>
            <span>LinkedIn</span>
          </StyledLink>
        </animated.div>
        <animated.div style={firstStyle}>
          <StyledLink>
            <GithubContainedIcon color={whiteSecondary} />
            <span style={{ color: whitePrimary, margin: "0 0.5rem" }}>--</span>
            <span>Github</span>
          </StyledLink>
        </animated.div>
      </StyledLeftSocials>
      <StyledRightSocials>
        <animated.div style={thirdStyle}>
          <StyledLink>
            <TriangleCtaIcon />
            <span style={{ color: whitePrimary, margin: "0 0.5rem" }}>--</span>
            <span>About me</span>
          </StyledLink>
        </animated.div>
      </StyledRightSocials>
    </>
  );
};

export const StyledLeftSocials = styled.div`
  bottom: 16.5rem;
  left: -4rem;
  padding: 0.75rem 0;
  transform: rotate(-90deg);
  position: absolute;
  display: flex;
  align-items: center;
`;

export const StyledRightSocials = styled.div`
  bottom: 14.5rem;
  right: 0;
  padding: 0.75rem 0;
  transform: rotate(-90deg);
  position: absolute;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled.div`
  margin-right: 2.5rem;
  display: flex;
  align-items: center;
`;
