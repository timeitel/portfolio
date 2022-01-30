import { Modal } from "@components";
import { MenuIcon } from "@components/Icons/MenuIcon";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Button, SecondaryButton } from "common/components/Button";
import { HtmlName } from "common/components/HtmlName/HtmlName";
import { ExternalLinkIcon } from "common/components/Icons";
import { Link } from "common/components/Link";
import React, { FC, useState } from "react";
import {
  StyledNav,
  StyledNavInner,
  StyledNavItem,
  StyledNavList,
  StyledResumeListItem,
} from "./styled";

interface Props {}

export const Navbar: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const showMenu = useMediaQuery({ max: "laptop" });

  return (
    <StyledNav menuIsOpen={open}>
      <StyledNavInner>
        <HtmlName>{"<Tim Eitel>"}</HtmlName>
        <StyledNavList style={{ fontFamily: "Raleway" }}>
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
            {showMenu && (
              <Button
                disableHover
                style={{ marginLeft: "0.5rem" }}
                onClick={() => setOpen((prev) => !prev)}
              >
                <MenuIcon />
              </Button>
            )}
          </StyledResumeListItem>
        </StyledNavList>
      </StyledNavInner>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        Testing modal
        <button onClick={() => setOpen(false)}>close</button>
      </Modal>
    </StyledNav>
  );
};
