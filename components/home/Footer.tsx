import React, { FC } from "react";
import styled from "@emotion/styled";
import { ExternalLinkIcon, GithubIcon } from "@components/common/Icons";
import { useTheme } from "@emotion/react";
import { Link } from "@components/common/Link";

export const Footer: FC<{}> = () => {
  const {
    color: { grey400 },
  } = useTheme();
  return (
    <StyledFooter>
      <FooterLinks>
        <li>
          <a
            href="https://github.com/timeitel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            <span style={{ color: grey400, marginLeft: "0.5rem" }}>
              Tim Eitel
            </span>
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
          <Link style={{ display: "flex" }} target="_blank" href="resume.pdf">
            Resume
            <ExternalLinkIcon />
          </Link>
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
  border-top: ${(p) => `1px solid ${p.theme.color.blackPrimary}`};
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
