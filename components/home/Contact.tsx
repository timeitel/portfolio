import { StyledLink } from "@components";
import { MailIcon } from "@components/common/icons";
import React, { FC } from "react";

interface Props {}

export const Contact: FC<Props> = () => {
  return (
    <section
      id="contact"
      style={{ background: "#212121", textAlign: "center" }}
    >
      <hgroup>
        <h2 className="section__title" style={{ color: "#0f1011" }}>
          Get In Touch
        </h2>
        <h3 className="section__subtitle" style={{ color: "#fff" }}>
          <span>04.</span>Contact
        </h3>
      </hgroup>
      <div>
        <p style={{ marginTop: "1rem" }}>
          If you'd like to reach out, my inbox is always open. <br />
          So feel free to get in touch and I'll try my best to get back to you.
        </p>
      </div>
      <StyledLink
        style={{ margin: "3rem 0 6rem" }}
        href="mailto:timeitel@outlook.com"
      >
        <MailIcon />
        Say Hello
      </StyledLink>
    </section>
  );
};
