import { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof ButtonSizes;
}

export const ButtonSizes = {
  sm: "0.1875rem 0.5625rem",
  md: "",
  lg: "",
};
