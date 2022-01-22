import { breakpointFns, IBreakpointFns } from "@styles/theme";
import { IColors, themeDarkColors } from "./colors";
import { ISpacing, spacing } from "./spacing";

export interface ITheme {
  color: IColors;
  breakpoints: IBreakpointFns;
  spacing: ISpacing;
}

export const themeDark: ITheme = {
  color: themeDarkColors,
  breakpoints: breakpointFns,
  spacing: spacing,
};
