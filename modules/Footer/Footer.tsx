import { Link, ListItem } from "common/components";
import { SecondaryButton } from "common/components/Button";
import { HtmlName } from "common/components/HtmlName/HtmlName";
import {
  ExternalLinkIcon,
  LinkedInContainedIcon,
} from "common/components/Icons";
import { GithubContainedIcon } from "common/components/Icons/GithubContainedIcon";
import React, { FC } from "react";
import { StyledFooter, StyledList, StyledName } from "./styled";

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <StyledFooter>
      <StyledName>
        <HtmlName>{"</Tim Eitel>"}</HtmlName>
        <div style={{ display: "flex" }}>
          <Link href="https://github.com/timeitel/" target="_blank">
            <GithubContainedIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/tim-eitel/" target="_blank">
            <LinkedInContainedIcon />
          </Link>
        </div>
        <p style={{ margin: "1rem 0 0", textAlign: "left" }}>
          Perth, Western Australia
        </p>
      </StyledName>
      <StyledList>
        <ListItem className="section-links">
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem className="section-links">
          <Link href="#about">About</Link>
        </ListItem>
        <ListItem className="section-links">
          <Link href="#experience">Experience</Link>
        </ListItem>
        <ListItem className="section-links">
          <Link href="#portfolio">Portfolio</Link>
        </ListItem>
      </StyledList>
      <Link style={{ display: "flex" }} target="_blank" href="resume.pdf">
        <SecondaryButton>
          Resume
          <ExternalLinkIcon />
        </SecondaryButton>
      </Link>
    </StyledFooter>
  );
};
