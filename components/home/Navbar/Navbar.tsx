import { SecondaryButton } from "@common/Button";
import { HtmlName } from "@common/HtmlName/HtmlName";
import { ExternalLinkIcon } from "@components/common/Icons";
import { Link } from "@components/common/Link";
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
