import { useMediaQuery } from "@hooks/useMediaQuery";
import React, { FC } from "react";
import { LandingBackground } from "./LandingBackground";
import { LandingForeground } from "./LandingForeground";
import { LandingSocials } from "./LandingSocials";
import { Triangles } from "./Triangles";

interface Props {}

export const Landing: FC<Props> = () => {
  const showLinks = useMediaQuery({ min: "laptop" });
  return (
    <section style={{ height: "100vh", position: "relative" }}>
      <Triangles />
      <LandingBackground />
      <LandingForeground />
      {showLinks && <LandingSocials />}
    </section>
  );
};
