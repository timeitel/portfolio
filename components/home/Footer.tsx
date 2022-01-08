import React, { FC } from "react";
import styled from "@emotion/styled";
import { ExternalLinkIcon, GithubIcon } from "@components/common/Icons";
import { useTheme } from "@emotion/react";
import { Link, List, ListItem } from "@common";

export const Footer: FC<{}> = () => {
  const {
    color: { grey400 },
  } = useTheme();
  return (
    <StyledFooter>
      <StyledList>
        <ListItem>
          <Link
            href="https://github.com/timeitel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            <span style={{ color: grey400, marginLeft: "0.5rem" }}>
              Tim Eitel
            </span>
          </Link>
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
        <ListItem className="section-links">
          <Link href="#contact">Contact</Link>
        </ListItem>
        <ListItem>
          <Link style={{ display: "flex" }} target="_blank" href="resume.pdf">
            Resume
            <ExternalLinkIcon />
          </Link>
        </ListItem>
      </StyledList>
    </StyledFooter>
  );
};

const StyledList = styled(List)`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    .section-links {
      display: none;
    }
  }
`;

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  border-top: ${(p) => `1px solid ${p.theme.color.blackPrimary}`};
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
`;
