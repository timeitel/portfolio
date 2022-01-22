import { useDebounce } from "@hooks";
import { useEffect, useState } from "react";

export const useNavbarVisible = () => {
  const [prevY, setPrevY] = useState(0);
  const [visible, setVisible] = useState(true);

  const debouncedHandleScroll = useDebounce(
    () => {
      if (typeof window !== "undefined") {
        const currentY = window.scrollY;
        setVisible(currentY < prevY || currentY < 20);
        setPrevY(currentY);
      }
    },
    100,
    true
  );

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [prevY, visible, debouncedHandleScroll]);

  return visible;
};
