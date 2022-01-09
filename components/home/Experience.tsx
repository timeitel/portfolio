import React, { FC } from "react";
import styled from "@emotion/styled";
import { Jobs } from "./Jobs/Jobs";
import { IJob } from "@utils";
import { useTheme } from "@emotion/react";
import { Section } from "@common";

interface Props {
  jobs: IJob[];
}

export const Experience: FC<Props> = ({ jobs }) => {
  const {
    color: { whitePrimary },
  } = useTheme();
  return (
    <StyledSection
      id="experience"
      backgroundColor="grey800"
      style={{ minHeight: "590px" }}
    >
      <StyledContainer className="experience-tag">
        <hgroup style={{ marginBottom: "2rem" }}>
          <h3 className="section__subtitle" style={{ color: whitePrimary }}>
            <span>02.</span>Where I've Worked
          </h3>
        </hgroup>
        <Jobs jobs={jobs} />
      </StyledContainer>
    </StyledSection>
  );
};

const StyledContainer = styled.div`
  margin: auto;
  max-width: 900px;
`;

const StyledSection = styled(Section)`
  .experience-tag {
    position: relative;
  }

  .experience-tag:before {
    content: "<Experience>";
    font-family: "La Belle Aurore", cursive;
    color: ${(p) => p.theme.color.grey400};
    position: absolute;
    top: -2rem;
    left: -0.85rem;
  }

  .experience-tag:after {
    content: "</Experience>";
    font-family: "La Belle Aurore", cursive;
    color: ${(p) => p.theme.color.grey400};
    position: absolute;
    bottom: -4rem;
    left: -0.85rem;
  }
`;
