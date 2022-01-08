import { Button, ButtonProps } from "@common/Button";
import styled from "@emotion/styled";
import { FC } from "react";

export const PrimaryButton: FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledPrimaryButton {...rest}>{children}</StyledPrimaryButton>;
};

const StyledPrimaryButton = styled(Button)`
  background-color: ${(p) => p.theme.color.blackPrimary};
  color: ${(p) => p.theme.color.whitePrimary};

  &:hover {
    background: ${(p) => p.theme.color.blue600};
  }

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
