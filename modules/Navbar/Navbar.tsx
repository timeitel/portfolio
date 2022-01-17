import { useDebounce } from "@hooks";
import { SecondaryButton } from "common/components/Button";
import { HtmlName } from "common/components/HtmlName/HtmlName";
import { ExternalLinkIcon } from "common/components/Icons";
import { Link } from "common/components/Link";
import React, { FC, useEffect, useState } from "react";
import { useSpring } from "react-spring";
import { StyledNav, StyledNavItem } from "./styled";

interface Props {}

export const Navbar: FC<Props> = () => {
  const [prevY, setPrevY] = useState(0);
  const [visible, setVisible] = useState(true);
  const navStyle = useSpring({
    transform: visible ? `translate3d(0, 0rem, 0)` : `translate3d(0, -4rem, 0)`,
  });

  const debouncedHandleScroll = useDebounce(() => {
    if (typeof window !== "undefined") {
      const currentY = window.scrollY;
      setVisible(prevY - currentY > 70 || currentY < 10);
      setPrevY(currentY);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [prevY, visible, debouncedHandleScroll]);

  return (
    <StyledNav style={navStyle}>
      <HtmlName>{"<Tim Eitel>"}</HtmlName>
      <ul style={{ display: "flex", alignItems: "center" }}>
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
            <SecondaryButton style={{ marginTop: "4px" }}>
              Resume
              <ExternalLinkIcon />
            </SecondaryButton>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};
