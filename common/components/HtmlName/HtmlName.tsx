import styled from "@emotion/styled";
import { FC } from "react";

interface Props {}

export const HtmlName: FC<Props> = ({ children }) => {
  return <StyledHtmlName href="/">{children}</StyledHtmlName>;
};

const StyledHtmlName = styled.a`
  white-space: nowrap;
  margin-top: 0.5rem;
  font-family: "La Belle Aurore", cursive;
  letter-spacing: 0.03em;
  font-size: 1.25rem;
`;
