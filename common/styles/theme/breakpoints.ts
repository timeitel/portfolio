import { AtLeastOne } from "@types";

export interface IBreakpointOperators {
  up: (min: BreakpointSize) => string;
  down: (max: BreakpointSize) => string;
  between: (min: BreakpointSize, max: BreakpointSize) => string;
  only: (deviceSize: BreakpointSize) => string;
}

export const breakpointOperators: IBreakpointOperators = {
  up: (min) => getMediaQuery({ min }),
  down: (max) => getMediaQuery({ max }),
  between: (min, max) => getMediaQuery({ min, max }),
  only: (deviceSize) => getDeviceMediaQuery(deviceSize),
};

type BreakpointSize = keyof IBreakpoints;
export interface IBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
export const breakpointSizes = {
  xs: "0px", // phone
  sm: "600px", // tablet
  md: "900px", // small laptop
  lg: "1200px", // desktop
  xl: "1536px", // large screen
};

const getDeviceMediaQuery = (size: BreakpointSize) => {
  switch (size) {
    case "xs":
      return getMediaQuery({ min: size, max: "sm" });
    case "sm":
      return getMediaQuery({ min: size, max: "md" });
    case "md":
      return getMediaQuery({ min: size, max: "lg" });
    case "lg":
      return getMediaQuery({ min: size, max: "xl" });
    case "xl":
      return getMediaQuery({ min: size });
    default:
      throw Error("Device size not supported.");
  }
};

type IGetMediaQuery = AtLeastOne<{
  min: BreakpointSize;
  max: BreakpointSize;
}>;
const getMediaQuery = ({ min, max }: IGetMediaQuery) => {
  if (min && max) {
    return `@media (min-width:${breakpointSizes[min]}px) and (max-width:${breakpointSizes[max]}px)`;
  } else if (min) {
    return `@media (min-width:${breakpointSizes[min]}px)`;
  } else if (max) {
    return `@media (max-width:${breakpointSizes[max]}px)`;
  } else {
    throw Error("At least min or max required.");
  }
};
