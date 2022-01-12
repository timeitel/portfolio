import { SecondaryButton } from "common/components/Button";
import { HtmlName } from "common/components/HtmlName/HtmlName";
import { ExternalLinkIcon } from "common/components/Icons";
import { Link } from "common/components/Link";
import React, { FC } from "react";
import { StyledHeader, StyledNavItem } from "./styled";

interface Props {}

export const Navbar: FC<Props> = () => {
  return (
    <StyledHeader>
      <HtmlName>{"<Tim Eitel>"}</HtmlName>
      <nav style={{ display: "flex", alignItems: "center" }}>
        <ul style={{ display: "flex", alignItems: "center" }}>
          <StyledNavItem>
            <a href="#about">About</a>
          </StyledNavItem>
          <StyledNavItem>
            <a href="#experience">Experience</a>
          </StyledNavItem>
          <StyledNavItem>
            <a href="#portfolio">Portfolio</a>
          </StyledNavItem>
          <StyledNavItem>
            <a href="#contact">Contact</a>
          </StyledNavItem>
        </ul>
        <Link
          style={{ display: "flex", alignItems: "center" }}
          target="_blank"
          href="resume.pdf"
        >
          <SecondaryButton style={{ marginTop: "4px" }}>
            Resume
            <ExternalLinkIcon />
          </SecondaryButton>
        </Link>
      </nav>
    </StyledHeader>
  );
};
