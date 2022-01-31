import { Button } from "@components/Button";
import React, { FC } from "react";
import { animated, useSpring } from "react-spring";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export const AnimatedMenuIcon: FC<Props> = ({ isOpen, onClick }) => {
  const first = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-42deg)"
      : "translate(2px, 7px) rotate(0deg)",
  });
  const second = useSpring({
    transform: isOpen
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)",
  });
  const third = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-42deg)"
      : "translate(2px, 31px) rotate(0deg)",
  });

  return (
    <Button disableHover style={{ marginLeft: "0.5rem" }} onClick={onClick}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 44 44"
        fill="#fafafa"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.rect width="40" height="2" rx="2" style={first} />
        <animated.rect width="40" height="2" rx="2" style={second} />
        <animated.rect width="40" height="2" rx="2" style={third} />
      </svg>
    </Button>
  );
};
