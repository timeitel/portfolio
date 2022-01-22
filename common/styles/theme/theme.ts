import { breakpointOperators, IBreakpointOperators } from "@styles/theme";
import { IColors, themeDarkColors } from "./colors";
import { ISpacing, spacing } from "./spacing";

export interface ITheme {
  color: IColors;
  breakpoints: IBreakpointOperators;
  spacing: ISpacing;
}

export const themeDark: ITheme = {
  color: themeDarkColors,
  breakpoints: breakpointOperators,
  spacing: spacing,
};
