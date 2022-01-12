import styled from "@emotion/styled";
import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLLIElement> {}

export const ListItem: FC<Props> = ({ children, ...rest }) => {
  return <StyledListItem {...rest}>{children}</StyledListItem>;
};

const StyledListItem = styled.li``;
