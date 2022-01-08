import { Button, ButtonProps } from "@components/common/Button";
import styled from "@emotion/styled";
import { FC } from "react";

export const SecondaryButton: FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledSecondaryButton {...rest}>{children}</StyledSecondaryButton>;
};

const StyledSecondaryButton = styled(Button)`
  color: ${(p) => p.theme.color.blue600};
  border: ${(p) => `1px solid ${p.theme.color.blue600}`};

  &:hover {
    background-color: ${(p) => `${p.theme.color.blue200}33`};
  }

  &:before {
    content: "";
    background: ${(p) => p.theme.color.blue600};
    position: absolute;
    width: 97.5%;
    height: 1px;
    bottom: 0;
    left: 1.25%;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.35s cubic-bezier(1, 0.25, 0, 0.75) 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
