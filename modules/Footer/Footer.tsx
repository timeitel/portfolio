import { Link } from "@components/Link";
import { ListItem } from "@components/List";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { SecondaryButton } from "common/components/Button";
import { HtmlName } from "common/components/HtmlName/HtmlName";
import {
  ExternalLinkIcon,
  LinkedInContainedIcon,
} from "common/components/Icons";
import { GithubContainedIcon } from "common/components/Icons/GithubContainedIcon";
import React, { FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import { StyledFooter, StyledLinksContainer, StyledList } from "./styled";

interface Props {}

export const Footer: FC<Props> = () => {
  const isMobile = useMediaQuery({ max: "tablet" });
  return (
    <StyledFooter style={{ fontFamily: "Raleway" }}>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ margin: "0 0 0.6125rem" }}>timeitel@outlook.com</p>
        <p style={{ margin: isMobile ? "0 0 1.2rem" : "0 0 0.6125rem" }}>
          Perth, Western Australia
        </p>
        <div style={{ marginTop: "auto" }}>
          <HtmlName>{"</Tim Eitel>"}</HtmlName>
        </div>
      </div>
      <StyledLinksContainer>
        <StyledList style={{ marginRight: "5rem" }}>
          <ListItem>
            <Link href="/">Home</Link>
          </ListItem>
          <ListItem>
            <ScrollLink
              smooth
              offset={-100}
              style={{ cursor: "pointer" }}
              to="about"
            >
              About
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink
              smooth
              offset={-50}
              style={{ cursor: "pointer" }}
              to="experience"
            >
              Experience
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink
              smooth
              offset={-50}
              style={{ cursor: "pointer" }}
              to="portfolio"
            >
              Portfolio
            </ScrollLink>
          </ListItem>
        </StyledList>
        <StyledList>
          <ListItem>
            <Link style={{ display: "flex" }} target="_blank" href="resume.pdf">
              <SecondaryButton>
                Resume
                <ExternalLinkIcon />
              </SecondaryButton>
            </Link>
          </ListItem>
          <ListItem>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.5rem",
              }}
            >
              <Link
                href="https://github.com/timeitel/"
                target="_blank"
                style={{ marginRight: "1rem" }}
              >
                <GithubContainedIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tim-eitel/"
                target="_blank"
              >
                <LinkedInContainedIcon />
              </Link>
            </div>
          </ListItem>
        </StyledList>
      </StyledLinksContainer>
    </StyledFooter>
  );
};
