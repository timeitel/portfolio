import "@emotion/react";
import { ITheme } from "common/styles/types";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
