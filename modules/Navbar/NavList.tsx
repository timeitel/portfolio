import { SecondaryButton } from "@components/Button";
import { ExternalLinkIcon } from "@components/Icons";
import { Link } from "@components/Link";
import { Link as ScrollLink } from "react-scroll";
import { FC } from "react";
import { StyledListItem, StyledList, StyledResumeListItem } from "./styled";

interface Props {
  menuIsOpen: boolean;
}

export const NavList: FC<Props> = ({ menuIsOpen }) => {
  return (
    <StyledList style={{ fontFamily: "Raleway" }}>
      <StyledListItem>
        <ScrollLink
          to="about"
          smooth
          offset={-100}
          style={{ cursor: "pointer" }}
        >
          About
        </ScrollLink>
      </StyledListItem>
      <StyledListItem>
        <ScrollLink
          to="experience"
          smooth
          offset={-50}
          style={{ cursor: "pointer" }}
        >
          Experience
        </ScrollLink>
      </StyledListItem>
      <StyledListItem>
        <ScrollLink
          to="portfolio"
          smooth
          offset={-50}
          style={{ cursor: "pointer" }}
        >
          Portfolio
        </ScrollLink>
      </StyledListItem>
      <StyledListItem>
        <ScrollLink
          to="contact"
          smooth
          offset={-50}
          style={{ cursor: "pointer" }}
        >
          Contact
        </ScrollLink>
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
