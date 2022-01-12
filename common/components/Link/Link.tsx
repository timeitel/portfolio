import styled from "@emotion/styled";
import { AnchorHTMLAttributes, FC } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link: FC<Props> = ({ children, ...rest }) => {
  return <LinkElement {...rest}>{children}</LinkElement>;
};

const LinkElement = styled.a``;
