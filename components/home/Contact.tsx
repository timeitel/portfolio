import { Section } from "@common";
import { PrimaryButton } from "@common/Button";
import { MailIcon } from "@components/common/Icons";
import { Link } from "@components/common/Link";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { getHtmlTagStyles } from "@styles/htmlTags";
import React, { FC } from "react";

interface Props {}

export const Contact: FC<Props> = () => {
  const {
    color: { whitePrimary, grey400 },
  } = useTheme();
  return (
    <StyledSection id="contact" backgroundColor="grey800" textAlign="center">
      <hgroup className="contact-open-tag">
        <h3 className="section__subtitle" style={{ color: whitePrimary }}>
          <span>04.</span>Get In Touch
        </h3>
      </hgroup>
      <div className="contact-closing-tag">
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
  .contact-closing-tag,
  .contact-open-tag {
    position: relative;
  }

  .contact-open-tag:before {
    ${(p) => getHtmlTagStyles(p.theme)};
    content: "<Contact>";
    top: -2rem;
    left: -0.85rem;
  }

  .contact-closing-tag:after {
    ${(p) => getHtmlTagStyles(p.theme)};
    content: "</Contact>";
    bottom: -10rem;
    left: -0.85rem;
  }
`;
