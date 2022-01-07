import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  padding: 1.25rem;
  position: absolute;
  height: 4rem;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(p) => p.theme.color.whitePrimary};
  z-index: 1;

  @media only screen and (min-width: 550px) {
    padding: 1.25rem 2.5rem;
  }

  @media only screen and (min-width: 1024px) {
    padding: 2.25rem 4.5rem;
  }
`;

export const StyledNavItem = styled.li`
  cursor: pointer;
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

  @media only screen and (min-width: 680px) {
    display: block;
  }

  @media only screen and (min-width: 1024px) {
    margin-right: 58px;
  }
`;
