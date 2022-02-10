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
  return (
    <section style={{ height: "100vh", position: "relative" }}>
      <Triangles />
      {largeScreen && <Rectangles />}
      <LandingBackground />
      <LandingForeground />
      <LandingSocials />
    </section>
  );
};
