import { useTheme } from "@emotion/react";
import { FC } from "react";

interface Props {}

export const TriangleCtaIcon: FC<Props> = ({}) => {
  const {
    color: { whitePrimary },
  } = useTheme();
  return (
    <svg
      viewBox="0 0 18 18"
      style={{
        width: "0.75rem",
        height: "0.75rem",
        transform: "rotate(180deg)",
        marginTop: "2px",
      }}
      fill={whitePrimary}
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.43 17.5l12.14-8L2.43.5z"></path>
    </svg>
  );
};
