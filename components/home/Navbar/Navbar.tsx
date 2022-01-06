import { StyledLink } from "@components";
import { ExternalLinkIcon } from "@components/common/icons";
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
            <StyledLink
              style={{ display: "flex" }}
              target="_blank"
              href="resume.pdf"
            >
              Resume
              <ExternalLinkIcon />
            </StyledLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
