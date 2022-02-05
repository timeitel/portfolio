import { FC, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

interface Props {
  rotation: number;
  timing: number;
}

export const AnimatedReveal: FC<Props> = ({
  rotation = 0,
  timing = 150,
  children,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const style = useSpring({
    transform: isAnimating ? `rotate(${rotation}deg)` : `rotate(0deg)`,
  });

  useEffect(() => {
    if (!isAnimating) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsAnimating(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isAnimating, timing]);

  return (
    <animated.div onMouseEnter={() => setIsAnimating(true)} style={style}>
      {children}
    </animated.div>
  );
};
