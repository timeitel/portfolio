import {
  GithubContainedIcon,
  LinkedInContainedIcon,
  TriangleCtaIcon,
} from "@components/Icons";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useFadeIn } from "@hooks";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { FC } from "react";
import { animated } from "react-spring";

interface Props {}

export const LandingSocials: FC<Props> = ({}) => {
  const largeScreen = useMediaQuery({ min: "laptop" });
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
      <StyledLeftSocials largeScreen={largeScreen}>
        <animated.div style={secondStyle}>
          <StyledLink
            href="https://www.linkedin.com/in/tim-eitel/"
            target="_blank"
          >
            <LinkedInContainedIcon color={whiteSecondary} />
            {largeScreen && (
              <>
                <span style={{ color: whitePrimary, margin: "0 0.5rem" }}>
                  --
                </span>
                <span>LinkedIn</span>
              </>
            )}
          </StyledLink>
        </animated.div>
        <animated.div style={firstStyle}>
          <StyledLink href="https://github.com/timeitel/" target="_blank">
            <GithubContainedIcon color={whiteSecondary} />
            {largeScreen && (
              <>
                <span style={{ color: whitePrimary, margin: "0 0.5rem" }}>
                  --
                </span>
                <span>Github</span>
              </>
            )}
          </StyledLink>
        </animated.div>
      </StyledLeftSocials>

      <StyledRightSocials largeScreen={largeScreen}>
        <animated.div style={thirdStyle}>
          <StyledLink href="#about">
            <TriangleCtaIcon />
            <span style={{ color: whitePrimary, margin: "0 0.5rem" }}>--</span>
            <span>About{largeScreen && " me"}</span>
          </StyledLink>
        </animated.div>
      </StyledRightSocials>
    </>
  );
};

const StyledLeftSocials = styled.div<{ largeScreen: boolean }>`
  bottom: ${(p) => (p.largeScreen ? "16.5rem" : "10rem")};
  left: ${(p) => (p.largeScreen ? "-4rem" : 0)};
  padding: 0.75rem 0;
  transform: rotate(-90deg);
  position: ${(p) => (p.largeScreen ? "fixed" : "absolute")};
  display: flex;
  align-items: center;
  z-index: 1;
`;

const StyledRightSocials = styled.div<{ largeScreen: boolean }>`
  bottom: ${(p) => (p.largeScreen ? "11.75rem" : "10rem")};
  right: ${(p) => (p.largeScreen ? "0.5rem" : 0)};
  padding: 0.75rem 0;
  transform: rotate(-90deg);
  position: absolute;
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  margin-right: 2.5rem;
  display: flex;
  align-items: center;
`;
