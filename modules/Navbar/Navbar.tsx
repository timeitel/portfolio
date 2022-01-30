import { Button, Modal } from "@components";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { HtmlName } from "common/components/HtmlName/HtmlName";
import React, { FC, useState } from "react";
import { StyledNav, StyledNavInner } from "./styled";
import { NavList } from "./NavList";
import { MenuIcon } from "@components/Icons/MenuIcon";
import { NavModal } from "@modules/Navbar/NavModal";

interface Props {}

export const Navbar: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showMenu = useMediaQuery({ max: "laptop" });

  return (
    <StyledNav menuIsOpen={isOpen}>
      <StyledNavInner>
        <HtmlName>{"<Tim Eitel>"}</HtmlName>
        <NavList />
        {showMenu && (
          <Button
            disableHover
            style={{ marginLeft: "0.5rem" }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <MenuIcon />
          </Button>
        )}
      </StyledNavInner>
      <NavModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </StyledNav>
  );
};
