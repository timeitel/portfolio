import { FC } from "react";

interface Props {}

export const MailIcon: FC<Props> = ({}) => {
  return (
    <svg
      style={{ width: "1.5rem", height: "1.5rem", marginRight: "0.5rem" }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  );
};
