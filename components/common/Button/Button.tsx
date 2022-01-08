import { ButtonProps, ButtonSizes } from "@common/Button";
import styled from "@emotion/styled";
import { FC } from "react";

interface StyledDefaultButtonProps extends ButtonProps {
  size: keyof typeof ButtonSizes;
}

export const Button: FC<ButtonProps> = ({ size = "md", children, ...rest }) => {
  return (
    <StyledDefaultButton size={size} {...rest}>
      {children}
    </StyledDefaultButton>
  );
};

const StyledDefaultButton = styled.button<StyledDefaultButtonProps>`
  align-items: center;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  display: flex;
  padding: ${(p) => ButtonSizes[p.size]};
  position: relative;
  transition: background 0.25s ease-in 0.15s;
`;
