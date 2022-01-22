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

const getDeviceMediaQuery = (size: BreakpointSize) => {
  switch (size) {
    case "phone":
      return getMediaQuery({ min: size, max: "tablet" });
    case "tablet":
      return getMediaQuery({ min: size, max: "laptop" });
    case "laptop":
      return getMediaQuery({ min: size, max: "desktop" });
    case "desktop":
      return getMediaQuery({ min: size, max: "ultraWide" });
    case "ultraWide":
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
    return `@media (min-width:${breakpointSizes[min]}) and (max-width:${breakpointSizes[max]})`;
  } else if (min) {
    return `@media (min-width:${breakpointSizes[min]})`;
  } else if (max) {
    return `@media (max-width:${breakpointSizes[max]})`;
  } else {
    throw Error("At least min or max required.");
  }
};
