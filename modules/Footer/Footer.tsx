import { Link, ListItem } from "common/components";
import { SecondaryButton } from "common/components/Button";
import { HtmlName } from "common/components/HtmlName/HtmlName";
import {
  ExternalLinkIcon,
  LinkedInContainedIcon,
} from "common/components/Icons";
import { GithubContainedIcon } from "common/components/Icons/GithubContainedIcon";
import React, { FC } from "react";
import { StyledFooter, StyledLinksContainer, StyledList } from "./styled";

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <StyledFooter>
      <div>
        <HtmlName>{"</Tim Eitel>"}</HtmlName>
      </div>
      <StyledLinksContainer>
        <StyledList style={{ marginRight: "5rem" }}>
          <ListItem>
            <Link href="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="#about">About</Link>
          </ListItem>
          <ListItem>
            <Link href="#experience">Experience</Link>
          </ListItem>
          <ListItem>
            <Link href="#portfolio">Portfolio</Link>
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
