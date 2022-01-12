import { Section } from "@common";
import { PrimaryButton } from "@common/Button";
import { MailIcon } from "@components/common/Icons";
import { Link } from "@components/common/Link";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { getHtmlTagStyles } from "common/styles/htmlTags";
import React, { FC } from "react";

interface Props {}

export const Contact: FC<Props> = () => {
  const {
    color: { whitePrimary, grey400 },
  } = useTheme();
  return (
    <StyledSection id="contact" backgroundColor="grey800" textAlign="center">
      <hgroup>
        <h3 className="section__subtitle" style={{ color: whitePrimary }}>
          <span className="contact-tag">04.</span>Get In Touch
        </h3>
      </hgroup>
      <div>
        <p style={{ marginTop: "1rem", color: grey400 }}>
          If you'd like to reach out, my inbox is always open. <br />
          So feel free to get in touch and I'll try my best to get back to you.
        </p>
      </div>
      <Link
        style={{
          margin: "3rem auto",
          display: "flex",
          width: "fit-content",
        }}
        href="mailto:timeitel@outlook.com"
      >
        <PrimaryButton>
          <MailIcon />
          Say hello
        </PrimaryButton>
      </Link>
    </StyledSection>
  );
};

const StyledSection = styled(Section)`
  .contact-tag,
  .contact-tag {
    position: relative;
  }

  .contact-tag:before {
    ${(p) => getHtmlTagStyles(p.theme)};
    content: "<Contact>";
    top: -2rem;
    left: -0.8rem;
    font-size: 1rem;
  }

  .contact-tag:after {
    ${(p) => getHtmlTagStyles(p.theme)};
    content: "</Contact>";
    bottom: -16rem;
    left: -0.8rem;
    font-size: 1rem;
  }
`;
