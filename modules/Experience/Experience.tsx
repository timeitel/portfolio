import React, { FC } from "react";
import styled from "@emotion/styled";
import { Jobs } from "../Jobs/Jobs";
import { IJob } from "common/types";
import { useTheme } from "@emotion/react";
import { Section } from "common/components/Section";
import { getHtmlTagStyles } from "common/styles/htmlTags";
import { useIntersectionFadeIn } from "@hooks";
import { animated } from "react-spring";

interface Props {
  jobs: IJob[];
}

export const Experience: FC<Props> = ({ jobs }) => {
  const {
    color: { whitePrimary },
  } = useTheme();
  const { fadeInStyle, intersectionRef } = useIntersectionFadeIn();
  return (
    <StyledSection
      id="experience"
      backgroundColor="grey800"
      style={{ minHeight: "590px" }}
    >
      <animated.div style={fadeInStyle} ref={intersectionRef}>
        <StyledContainer className="experience-tag">
          <hgroup style={{ marginBottom: "2rem" }}>
            <h3 className="section__subtitle" style={{ color: whitePrimary }}>
              Where I've Worked
            </h3>
          </hgroup>
          <Jobs jobs={jobs} />
        </StyledContainer>
      </animated.div>
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
  }

  .experience-tag:after {
    ${(p) => getHtmlTagStyles(p.theme)};
    content: "</Experience>";
    bottom: -2rem;
  }
`;
