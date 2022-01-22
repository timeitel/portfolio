import { Link, List, ListItem } from "common/components";
import { SecondaryButton } from "common/components/Button";
import { HtmlName } from "common/components/HtmlName/HtmlName";
import { GithubContainedIcon } from "common/components/Icons/GithubContainedIcon";
import {
  ExternalLinkIcon,
  LinkedInContainedIcon,
} from "common/components/Icons";
import styled from "@emotion/styled";
import React, { FC } from "react";

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <StyledFooter>
      <HtmlName>{"</Tim Eitel>"}</HtmlName>
      <StyledList>
        <ListItem className="section-links">
          <Link href="#about">About</Link>
        </ListItem>
        <ListItem className="section-links">
          <Link href="#experience">Experience</Link>
        </ListItem>
        <ListItem className="section-links">
          <Link href="#portfolio">Portfolio</Link>
        </ListItem>
        <ListItem className="section-links">
          <Link href="https://github.com/timeitel/" target="_blank">
            <GithubContainedIcon />
          </Link>
        </ListItem>
        <ListItem className="section-links">
          <Link href="https://www.linkedin.com/in/tim-eitel/" target="_blank">
            <LinkedInContainedIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Link style={{ display: "flex" }} target="_blank" href="resume.pdf">
            <SecondaryButton>
              Resume
              <ExternalLinkIcon />
            </SecondaryButton>
          </Link>
        </ListItem>
      </StyledList>
    </StyledFooter>
  );
};

const StyledList = styled(List)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-left: 3rem;

  @media (max-width: 768px) {
    .section-links {
      display: none;
    }
  }
`;

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    padding: 0 7.5rem;
  }
`;
