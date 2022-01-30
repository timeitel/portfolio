import { SecondaryButton } from "@components/Button";
import { ExternalLinkIcon } from "@components/Icons";
import { Link } from "@components/Link";
import { FC } from "react";
import { StyledNavItem, StyledNavList, StyledResumeListItem } from "./styled";

interface Props {
  menuIsOpen: boolean;
}

export const NavList: FC<Props> = ({ menuIsOpen }) => {
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
      {!menuIsOpen && (
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
      )}
    </StyledNavList>
  );
};
