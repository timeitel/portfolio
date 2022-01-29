import { ButtonProps, ButtonSizes } from "common/components/Button";
import styled from "@emotion/styled";
import { FC } from "react";
import { ButtonVariants } from "@components/Button/types";

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledDefaultButton {...rest}>{children}</StyledDefaultButton>;
};

const StyledDefaultButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: inherit;
  border-radius: 4px;
  border: none;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.02857em;
  line-height: 1.75;
  position: relative;
  transition: background 0.25s ease-in 0.15s;

  ${(p) =>
    !p.disableHover &&
    `
  &:hover {
    background-color: ${p.theme.color.grey400};
  }
  `}

  ${(p) => p.size && { ...ButtonSizes[p.size] }};
  ${(p) => p.variant && { ...ButtonVariants[p.variant] }};
`;
StyledDefaultButton.defaultProps = {
  size: "md",
  variant: "text",
};
