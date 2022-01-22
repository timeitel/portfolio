import { useMediaQuery } from "@hooks/useMediaQuery";
import { SecondaryButton } from "common/components/Button";
import { HtmlName } from "common/components/HtmlName/HtmlName";
import { ExternalLinkIcon } from "common/components/Icons";
import { Link } from "common/components/Link";
import React, { FC } from "react";
import { useSpring } from "react-spring";
import { StyledNav, StyledNavInner, StyledNavItem } from "./styled";

interface Props {}

export const Navbar: FC<Props> = () => {
  const isPhone = useMediaQuery({ max: "tablet" });
  const navStyle = useSpring({
    transform: true ? `translate3d(0, 0rem, 0)` : `translate3d(0, -5rem, 0)`,
  });

  return (
    <StyledNav style={navStyle}>
      <StyledNavInner>
        <HtmlName>{"<Tim Eitel>"}</HtmlName>
        <ul style={{ display: "flex", alignItems: "center", margin: 0 }}>
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
          <li>
            <Link
              style={{ display: "flex", alignItems: "center" }}
              target="_blank"
              href="resume.pdf"
            >
              <SecondaryButton
                style={{ marginTop: "4px" }}
                size={isPhone ? "sm" : "md"}
              >
                Resume
                <ExternalLinkIcon />
              </SecondaryButton>
            </Link>
          </li>
        </ul>
      </StyledNavInner>
    </StyledNav>
  );
};
