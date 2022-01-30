import { SecondaryButton } from "@components/Button";
import { ExternalLinkIcon } from "@components/Icons";
import { Link } from "@components/Link";
import styled from "@emotion/styled";
import { FC } from "react";
import { StyledNavItem, StyledNavList, StyledResumeListItem } from "./styled";

interface Props {}

export const NavList: FC<Props> = ({}) => {
  return (
    <StyledNavList style={{ fontFamily: "Raleway" }}>
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
      <StyledResumeListItem>
        <Link
          style={{ display: "flex", alignItems: "center" }}
          target="_blank"
          href="resume.pdf"
        >
          <SecondaryButton size="sm">
            Resume
            <ExternalLinkIcon />
          </SecondaryButton>
        </Link>
      </StyledResumeListItem>
    </StyledNavList>
  );
};
