import React, { FC } from "react";
import { IntroBackground } from "./IntroBackground";
import { IntroForeground } from "./IntroForeground";

interface Props {}

export const Landing: FC<Props> = () => {
  return (
    <section style={{ height: "100vh", position: "relative" }}>
      <IntroBackground />
      <IntroForeground />
    </section>
  );
};
