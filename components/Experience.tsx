import React, { FC } from "react";
import styled from "styled-components";
import { JobProp } from "../util/types";
import { Jobs } from "./Jobs/Jobs";

interface Props {
  jobs: JobProp[];
}

export const Experience: FC<Props> = ({ jobs }) => {
  return (
    <section id="experience" className="bg-c-dark-1">
      <StyledContainer>
        <hgroup className="mb-16">
          <h2 className="font-black section__title text-c-dark-2">
            Experience
          </h2>
          <h3 className="section__subtitle text-white">
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
