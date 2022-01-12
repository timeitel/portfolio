import React, { FC } from "react";
import styled from "@emotion/styled";
import { Jobs } from "./Jobs/Jobs";
import { IJob } from "common/types";
import { useTheme } from "@emotion/react";
import { Section } from "common/components";
import { getHtmlTagStyles } from "common/styles/htmlTags";

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
    ${(p) => getHtmlTagStyles(p.theme)};
    content: "<Experience>";
    top: -2rem;
    left: -0.85rem;
  }

  .experience-tag:after {
    ${(p) => getHtmlTagStyles(p.theme)};
    content: "</Experience>";
    bottom: -2rem;
    left: -0.85rem;
  }
`;
