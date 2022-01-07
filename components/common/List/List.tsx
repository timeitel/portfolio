import styled from "@emotion/styled";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLUListElement> {}

export const List: FC<Props> = ({ children, ...rest }) => {
  return <StyledList {...rest}>{children}</StyledList>;
};

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;
