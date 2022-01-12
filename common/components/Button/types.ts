import { CSSProperties, HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof ButtonSizes;
}

interface IButtonSizes {
  sm: CSSProperties;
  md: CSSProperties;
  lg: CSSProperties;
}

export const ButtonSizes: IButtonSizes = {
  sm: {
    padding: "4px 10px",
    fontSize: "0.9375rem",
  },
  md: { padding: "6px 16px", fontSize: "1rem" },
  lg: { padding: "8px 22px", fontSize: "1.0625rem" },
};
