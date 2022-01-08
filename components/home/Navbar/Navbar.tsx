import { Link } from "@components/common/Link";
import { ExternalLinkIcon } from "@components/common/Icons";
import React, { FC } from "react";
import { StyledHeader, StyledNavItem } from "./styled";
import { SecondaryButton } from "@common/Button";

interface Props {}

export const Navbar: FC<Props> = () => {
  return (
    <StyledHeader>
      <a href="/" style={{ whiteSpace: "nowrap", marginRight: "1rem" }}>
        Tim Eitel
      </a>
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
          <SecondaryButton>
            Resume
            <ExternalLinkIcon />
          </SecondaryButton>
        </Link>
      </nav>
    </StyledHeader>
  );
};
