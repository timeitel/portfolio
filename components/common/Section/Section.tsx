import styled from "@emotion/styled";
import { FC, HTMLAttributes } from "react";
import { IColors } from "styles/types";

interface Props extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: keyof IColors;
  textAlign?: "left" | "center";
}

interface StyledSectionProps extends Props {
  backgroundColor: keyof IColors;
}

export const Section: FC<Props> = ({
  backgroundColor = "blackPrimary",
  textAlign,
  children,
}) => {
  return (
    <StyledSection backgroundColor={backgroundColor} textAlign={textAlign}>
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.section<StyledSectionProps>`
  background-color: ${(p) => p.theme.color[p.backgroundColor]};
  text-align: ${(p) => p.textAlign || "left"};
`;
