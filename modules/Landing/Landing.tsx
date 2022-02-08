import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@hooks/useMediaQuery";
import React, { FC } from "react";
import { LandingBackground } from "./LandingBackground";
import { LandingSocials } from "./LandingSocials";
import { LandingForeground } from "./LandingForeground";

interface Props {}

export const Landing: FC<Props> = () => {
  const showLinks = useMediaQuery({ min: "laptop" });
  return (
    <section style={{ height: "100vh", position: "relative" }}>
      <LandingBackground />
      <LandingForeground />
      {showLinks && <LandingSocials />}
    </section>
  );
};
