import { useMediaQuery } from "@hooks/useMediaQuery";
import { NavModal } from "@modules/Navbar/NavModal";
import { HtmlName } from "common/components/HtmlName/HtmlName";
import React, { FC, useState } from "react";
import { AnimatedMenuIcon } from "./AnimatedMenuIcon";
import { NavList } from "./NavList";
import { StyledNav, StyledNavInner } from "./styled";

interface Props {}

export const Navbar: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showMenu = useMediaQuery({ max: "laptop" });

  return (
    <StyledNav menuIsOpen={isOpen}>
      <StyledNavInner>
        <HtmlName>{"<Tim Eitel>"}</HtmlName>
        <NavList menuIsOpen={isOpen} />
        {showMenu && (
          <AnimatedMenuIcon
            isOpen={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
      </StyledNavInner>
      <NavModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </StyledNav>
  );
};
