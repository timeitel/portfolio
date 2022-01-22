import { buildMediaQuery, buildDeviceMediaQuery } from "@utils";

export interface IBreakpointOperators {
  up: (min: BreakpointSize) => string;
  down: (max: BreakpointSize) => string;
  between: (min: BreakpointSize, max: BreakpointSize) => string;
  only: (deviceSize: BreakpointSize) => string;
}

export const breakpointOperators: IBreakpointOperators = {
  up: (min) => buildMediaQuery({ min }),
  down: (max) => buildMediaQuery({ max }),
  between: (min, max) => buildMediaQuery({ min, max }),
  only: (deviceSize) => buildDeviceMediaQuery(deviceSize),
};

export type BreakpointSize = keyof IBreakpoints;
export interface IBreakpoints {
  phone: string;
  tablet: string;
  laptop: string;
  desktop: string;
  ultraWide: string;
}
export const breakpointSizes: IBreakpoints = {
  phone: "0px",
  tablet: "600px",
  laptop: "900px",
  desktop: "1200px",
  ultraWide: "1536px",
};
