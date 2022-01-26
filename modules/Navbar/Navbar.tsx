import { useIntersectionObserver } from "@hooks";
import { SecondaryButton } from "common/components/Button";
import { HtmlName } from "common/components/HtmlName/HtmlName";
import { ExternalLinkIcon } from "common/components/Icons";
import { Link } from "common/components/Link";
import React, { FC, useRef } from "react";
import { useSpring } from "react-spring";
import {
  StyledNav,
  StyledNavInner,
  StyledNavItem,
  StyledNavList,
  StyledResumeListItem,
} from "./styled";

interface Props {}

export const Navbar: FC<Props> = () => {
  const ref = useRef(null);
  const intersectionRef = useIntersectionObserver({ rootMargin: "-50px", ref });
  const navStyle = useSpring({
    // transform: intersectionRef?.isIntersecting
    //   ? `translate3d(0, 0rem, 0)`
    //   : `translate3d(0, -5rem, 0)`,
  });

  return (
    <StyledNav style={navStyle} ref={ref}>
      <StyledNavInner>
        <HtmlName>{"<Tim Eitel>"}</HtmlName>
        <StyledNavList>
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
      </StyledNavInner>
    </StyledNav>
  );
};
