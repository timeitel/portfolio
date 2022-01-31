import { SecondaryButton } from "@components/Button";
import { ExternalLinkIcon } from "@components/Icons";
import { Link } from "@components/Link";
import { FC } from "react";
import { StyledListItem, StyledList, StyledResumeListItem } from "./styled";

interface Props {
  menuIsOpen: boolean;
}

export const NavList: FC<Props> = ({ menuIsOpen }) => {
  return (
    <StyledList style={{ fontFamily: "Raleway" }}>
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
    </StyledList>
  );
};
