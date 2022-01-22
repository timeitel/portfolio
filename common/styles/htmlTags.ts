import { css } from "@emotion/react";
import { ITheme } from "@theme";

export const getHtmlTagStyles = (
  theme: ITheme,
  color = theme.color.grey600
) => css`
  font-family: "La Belle Aurore", cursive;
  letter-spacing: 0.03em;
  position: absolute;
  color: ${color};
`;
