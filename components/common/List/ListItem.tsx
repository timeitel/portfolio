import styled from "@emotion/styled";
import { FC } from "react";

interface Props {}

export const ListItem: FC<Props> = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};

const StyledListItem = styled.li``;
