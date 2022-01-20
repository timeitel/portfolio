import { IColors } from "./colors";
import { themeBreakpoints, IBreakpoints } from "./breakpoints";
import { themeDarkColors } from "@styles/theme";

export interface ITheme {
  color: IColors;
  breakpoints: IBreakpoints;
}

export const themeDark: ITheme = {
  color: themeDarkColors,
  breakpoints: themeBreakpoints,
};
