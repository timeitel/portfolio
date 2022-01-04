import React, { FC } from "react";
import { StyledLink } from "../../styles/styles";
import { StyledHeader, StyledListItem } from "./styled";

interface Props {}

export const Navbar: FC<Props> = () => {
  return (
    <StyledHeader>
      <a href="/" style={{ whiteSpace: "nowrap", marginRight: "1rem" }}>
        Tim Eitel
      </a>
      <nav className="flex">
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
            <StyledLink className="flex" target="_blank" href="resume.pdf">
              Resume
              <svg
                className="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </StyledLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
