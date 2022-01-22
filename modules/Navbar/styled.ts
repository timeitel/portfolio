import styled from "@emotion/styled";
import { animated } from "react-spring";

export const StyledNav = styled(animated.nav)`
  padding: 17px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(p) => p.theme.color.whitePrimary};
  background-color: ${(p) => p.theme.color.grey800};
  z-index: 1;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 25%);
`;

export const StyledNavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;

  ${(p) => p.theme.breakpoints.up("desktop")} {
    padding: 0 40px;
  }
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
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.35s cubic-bezier(1, 0.25, 0, 0.75) 0s;
    transition: all 0.35s cubic-bezier(1, 0.25, 0, 0.75) 0s;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  ${(p) => p.theme.breakpoints.up("laptop")} {
    display: block;
  }

  ${(p) => p.theme.breakpoints.up("desktop")} {
    margin-right: 58px;
  }
`;
