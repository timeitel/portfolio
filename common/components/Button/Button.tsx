import { ButtonProps, ButtonSizes } from "common/components/Button";
import styled from "@emotion/styled";
import { FC } from "react";

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledDefaultButton {...rest}>{children}</StyledDefaultButton>;
};

const StyledDefaultButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: inherit;
  color: inherit;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  line-height: 1.75;
  justify-content: center;
  font-weight: 500;
  padding: ${(p) =>
    p.size ? ButtonSizes[p.size].padding : ButtonSizes.md.padding};
  font-size: ${(p) =>
    p.size ? ButtonSizes[p.size].fontSize : ButtonSizes.md.fontSize};
  letter-spacing: 0.02857em;
  position: relative;
  transition: background 0.25s ease-in 0.15s;
`;
