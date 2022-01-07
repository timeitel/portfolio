import { Link } from "@components/common/Link";
import { ExternalLinkIcon } from "@components/common/Icons";
import React, { FC } from "react";
import { StyledHeader, StyledListItem } from "./styled";

interface Props {}

export const Navbar: FC<Props> = () => {
  return (
    <StyledHeader>
      <a href="/" style={{ whiteSpace: "nowrap", marginRight: "1rem" }}>
        Tim Eitel
      </a>
      <nav style={{ display: "flex" }}>
        <ul style={{ display: "flex", alignItems: "center" }}>
          <StyledListItem>
            <a href="#about">About</a>
          </StyledListItem>
          <StyledListItem>
            <a href="#experience">Experience</a>
          </StyledListItem>
          <StyledListItem>
            <a href="#portfolio">Portfolio</a>
          </StyledListItem>
          <StyledListItem>
            <a href="#contact">Contact</a>
          </StyledListItem>
          <li>
            <Link style={{ display: "flex" }} target="_blank" href="resume.pdf">
              Resume
              <ExternalLinkIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
