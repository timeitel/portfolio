import { FC } from "react";

interface Props {
  fill?: string;
  color?: string;
  height?: string;
  width?: string;
}

export const TriangleIcon: FC<Props> = ({ fill, color, height, width }) => {
  return (
    <svg
      viewBox="-5 -5 130 110"
      style={{
        width: width || "1.5rem",
        height: height || "1.5rem",
        marginRight: "0.5rem",
      }}
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        data-v-2ebd1a03=""
        d="m0 0, 120 0, -60 100Z"
        fill={fill || "none"}
        strokeWidth="10"
        stroke={color || "currentColor"}
      ></path>
    </svg>
  );
};
