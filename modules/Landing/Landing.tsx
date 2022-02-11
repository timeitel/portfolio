import { useElementSize } from "@hooks";
import { useMediaQuery } from "@hooks/useMediaQuery";
import React, { FC } from "react";
import { LandingBackground } from "./LandingBackground";
import { LandingForeground } from "./LandingForeground";
import { LandingSocials } from "./LandingSocials";
import { Rectangles } from "./Rectangles";
import { Triangles } from "./Triangles";

interface Props {}

export const Landing: FC<Props> = () => {
  const largeScreen = useMediaQuery({ min: "laptop" });
  const [ref, { height }] = useElementSize();
  return (
    <section style={{ height: "100vh", position: "relative" }} ref={ref}>
      <Triangles />
      {largeScreen && <Rectangles />}
      <LandingBackground />
      <LandingForeground />
      {height > 700 && <LandingSocials />}
    </section>
  );
};
