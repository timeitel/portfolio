import "@emotion/react";
import { ITheme } from "@styles/theme/theme";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
