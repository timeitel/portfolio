import { Button } from "@components/Button";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { HtmlName } from "common/components/HtmlName/HtmlName";
import React, { FC, useState } from "react";
import { StyledNav, StyledNavInner } from "./styled";
import { NavList } from "./NavList";
import { AnimatedMenuIcon } from "./AnimatedMenuIcon";
import { NavModal } from "@modules/Navbar/NavModal";

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
      <NavModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </StyledNav>
  );
};
