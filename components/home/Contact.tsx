import { Section } from "@components";
import { MailIcon } from "@components/common/Icons";
import { Link } from "@components/common/Link";
import { useTheme } from "@emotion/react";
import React, { FC } from "react";

interface Props {}

export const Contact: FC<Props> = () => {
  const {
    color: { whitePrimary, blackPrimary },
  } = useTheme();
  return (
    <Section id="contact" backgroundColor="grey800" textAlign="center">
      <hgroup>
        <h2 className="section__title" style={{ color: blackPrimary }}>
          Get In Touch
        </h2>
        <h3 className="section__subtitle" style={{ color: whitePrimary }}>
          <span>04.</span>Contact
        </h3>
      </hgroup>
      <div>
        <p style={{ marginTop: "1rem" }}>
          If you'd like to reach out, my inbox is always open. <br />
          So feel free to get in touch and I'll try my best to get back to you.
        </p>
      </div>
      <Link
        style={{ margin: "3rem 0 6rem" }}
        href="mailto:timeitel@outlook.com"
      >
        <MailIcon />
        Say Hello
      </Link>
    </Section>
  );
};
