export interface IBreakpointOperators {
  up: IBreakpointHelper;
  down: IBreakpointHelper;
  only: IBreakpointHelper;
  between: IBreakpointHelper;
}

type IBreakpointHelper = (breakpoint: keyof keys) => IMediaQuery;
type IMediaQuery = string;
type keys = ["xs", "sm", "md", "lg", "xl"];

export const values = {
  xs: "0px", // phone
  sm: "600px", // tablet
  md: "900px", // small laptop
  lg: "1200px", // desktop
  xl: "1536px", // large screen
};

const upHelper: IBreakpointHelper = (key) => {
  return `@media (min-width:${values[key]}px)`;
};

export const themeBreakpointOperators: IBreakpointOperators = {
  up: upHelper,
  down: () => "",
  only: () => "",
  between: () => "",
};
