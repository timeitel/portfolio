import styled from "@emotion/styled";
import { animated } from "react-spring";

export const StyledNav = styled(animated.nav)<{ menuIsOpen: boolean }>`
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(p) => p.theme.color.whitePrimary};
  background-color: ${(p) =>
    p.menuIsOpen ? "transparent" : p.theme.color.grey800};
  z-index: 1;
  box-shadow: ${(p) =>
    p.menuIsOpen ? "none" : "0 2px 5px 0 rgb(0 0 0 / 25%)"};

  ${(p) => p.theme.breakpoints.only("mobile")} {
    padding: 1rem 0;
  }
`;

export const StyledNavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1220px;
  padding: 0 20px;
  margin: 0 auto;

  ${(p) => p.theme.breakpoints.up("desktop")} {
    padding: 0 40px;
  }
`;

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const StyledNavItem = styled.li`
  margin-right: 32px;
  position: relative;
  transition: all 0.15s ease-out;
  color: ${(p) => p.theme.color.grey400};
  display: none;

  &:hover {
    color: ${(p) => p.theme.color.whitePrimary};
  }

  &:before {
    background: ${(p) => p.theme.color.whitePrimary};
    content: "";
    position: absolute;
    height: 2px;
    bottom: -1.4rem;
    left: -0.5rem;
    right: -0.5rem;
    border-radius: 5px 5px 0 0;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.35s cubic-bezier(1, 0.25, 0, 0.75) 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  ${(p) => p.theme.breakpoints.up("laptop")} {
    display: block;
  }

  ${(p) => p.theme.breakpoints.up("desktop")} {
    margin-right: 58px;
  }
`;

export const StyledResumeListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  ${(p) => p.theme.breakpoints.up("laptop")} {
    padding-left: 2rem;

    &::before {
      content: "";
      position: absolute;
      display: block;
      width: 1px;
      background-color: ${(p) => p.theme.color.grey600};
      top: 3px;
      bottom: 3px;
      left: 0;
    }
  }

  ${(p) => p.theme.breakpoints.up("desktop")} {
    padding-left: 58px;
  }
`;
