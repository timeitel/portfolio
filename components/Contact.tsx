import React, { FC } from "react";
import { StyledLink } from "../styles/styles";

interface Props {}

export const Contact: FC<Props> = () => {
  return (
    <section
      id="contact"
      className="text-center"
      style={{ background: "#212121" }}
    >
      <hgroup>
        <h2 className="font-black section__title" style={{ color: "#0f1011" }}>
          Get In Touch
        </h2>
        <h3 className="section__subtitle text-white">
          <span>04.</span>Contact
        </h3>
      </hgroup>
      <div className="w-1/2:md">
        <p className="mt-4">
          If you'd like to reach out, my inbox is always open. <br />
          So feel free to get in touch and I'll try my best to get back to you.
        </p>
      </div>
      <StyledLink className="mt-12 mb-24" href="mailto:timeitel@outlook.com">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        Say Hello
      </StyledLink>
    </section>
  );
};
