import { useTheme } from "@emotion/react";
import { useIntersectionFadeIn } from "@hooks";
import { PrimaryButton } from "common/components/Button";
import { MailIcon } from "common/components/Icons";
import React, { FC } from "react";
import { animated } from "react-spring";
import { StyledContainer, StyledLink, StyledSection } from "./styled";

interface Props {}

export const Contact: FC<Props> = () => {
  const {
    color: { whitePrimary, grey800 },
  } = useTheme();
  const { fadeInStyle, intersectionRef } = useIntersectionFadeIn();
  return (
    <StyledSection id="contact" backgroundColor="grey800" textAlign="center">
      <animated.div style={{ ...fadeInStyle }} ref={intersectionRef}>
        <StyledContainer>
          <div style={{ margin: "0 auto", width: "fit-content" }}>
            <hgroup>
              <h3
                className="section__subtitle contact-tag"
                style={{ color: whitePrimary, textAlign: "left" }}
              >
                Get In Touch
              </h3>
            </hgroup>
            <p
              style={{ margin: "1rem 0 0", color: grey800, textAlign: "left" }}
            >
              If you'd like to reach out, my inbox is always open. <br />
              So feel free to get in touch and I'll try my best to get back to
              you.
            </p>
            <StyledLink href="mailto:timeitel@outlook.com">
              <PrimaryButton>
                <MailIcon />
                Say hello
              </PrimaryButton>
            </StyledLink>
          </div>
        </StyledContainer>
      </animated.div>
    </StyledSection>
  );
};
