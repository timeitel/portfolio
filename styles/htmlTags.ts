import { css } from "@emotion/react";
import { ITheme } from "@styles/types";

export const getHtmlTagStyles = (theme: ITheme) => css`
  font-family: "La Belle Aurore", cursive;
  letter-spacing: 0.03em;
  position: absolute;
  color: ${theme.color.grey600};
`;
