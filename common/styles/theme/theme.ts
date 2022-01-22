import { IBreakpointOperators, themeBreakpointOperators } from "@styles/theme";
import { IColors, themeDarkColors } from "./colors";
import { ISpacing, themeSpacing } from "./spacing";

export interface ITheme {
  color: IColors;
  breakpoints: IBreakpointOperators;
  spacing: ISpacing;
}

export const themeDark: ITheme = {
  color: themeDarkColors,
  breakpoints: themeBreakpointOperators,
  spacing: themeSpacing,
};
