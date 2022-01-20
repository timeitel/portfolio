import { themeBreakpoints, IBreakpoints } from "./breakpoints";
import { themeDarkColors, IColors } from "./colors";
import { ISpacing, themeSpacing } from "./spacing";

export interface ITheme {
  color: IColors;
  breakpoints: IBreakpoints;
  spacing: ISpacing;
}

export const themeDark: ITheme = {
  color: themeDarkColors,
  breakpoints: themeBreakpoints,
  spacing: themeSpacing,
};
