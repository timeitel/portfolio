import React, { FC } from "react";
import styled from "@emotion/styled";
import { Jobs } from "./Jobs/Jobs";
import { IJob } from "@utils";
import { useTheme } from "@emotion/react";

interface Props {
  jobs: IJob[];
}

export const Experience: FC<Props> = ({ jobs }) => {
  const {
    color: { grey800, blackPrimary, whitePrimary },
  } = useTheme();
  return (
    <section id="experience" style={{ background: grey800 }}>
      <StyledContainer>
        <hgroup style={{ marginBottom: "4rem" }}>
          <h2 className="section__title" style={{ color: blackPrimary }}>
            Experience
          </h2>
          <h3 className="section__subtitle" style={{ color: whitePrimary }}>
            <span>02.</span>Where I've Worked
          </h3>
        </hgroup>
        <Jobs jobs={jobs} />
      </StyledContainer>
    </section>
  );
};

const StyledContainer = styled.div`
  margin: auto;
  max-width: 900px;
`;
