import styled from "@emotion/styled";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export const Button: FC<Props> = ({ children }) => {
  return <StyledDefaultButton>{children}</StyledDefaultButton>;
};

const StyledDefaultButton = styled.button<Props>`
  padding: 0.5rem 1rem;
  border-radius: 2px;
  display: flex;
  position: relative;
  transition: background 0.25s ease-in 0.15s;

  &:before {
    background: ${(p) => p.theme.color.blue600};
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.35s cubic-bezier(1, 0.25, 0, 0.75) 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
