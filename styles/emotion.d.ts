import "@emotion/react";
import { ITheme } from "styles/types";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
