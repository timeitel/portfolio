import React, { FC } from "react";
import styled from "@emotion/styled";
import { StyledLink } from "@components";
import { ExternalLinkIcon, GithubIcon } from "@components/common/Icons";

export const Footer: FC<{}> = () => {
  return (
    <StyledFooter>
      <FooterLinks>
        <li>
          <a
            href="https://github.com/timeitel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ color: "#99a1a6" }}>Tim Eitel</span>
            <GithubIcon />
          </a>
        </li>
        <li className="section-links">
          <a href="#about">About</a>
        </li>
        <li className="section-links">
          <a href="#experience">Experience</a>
        </li>
        <li className="section-links">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="section-links">
          <a href="#contact">Contact</a>
        </li>
        <li>
          <StyledLink
            style={{ display: "flex" }}
            target="_blank"
            href="Tim-Eitel-Resume.pdf"
          >
            Resume
            <ExternalLinkIcon />
          </StyledLink>
        </li>
      </FooterLinks>
    </StyledFooter>
  );
};

const FooterLinks = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    .section-links {
      display: none;
    }
  }
`;

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #0f1011;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
