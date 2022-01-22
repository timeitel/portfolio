import { ExternalLinkIcon, Link, Section } from "common/components";
import { Project } from "modules";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { getHtmlTagStyles } from "common/styles/htmlTags";
import { IProject } from "common/types";
import React, { FC } from "react";
import { useIntersectionFadeIn } from "@hooks";
import { animated } from "react-spring";

interface Props {
  projects: IProject[];
}

export const Portfolio: FC<Props> = ({ projects }) => {
  const {
    color: { whitePrimary },
  } = useTheme();
  const { fadeInStyle, intersectionRef } = useIntersectionFadeIn();
  const {
    fadeInStyle: seeMoreFadeInStyle,
    intersectionRef: seeMoreIntersectionRef,
  } = useIntersectionFadeIn();

  const projectList = projects.map((p) => (
    <Project
      github={p.github}
      content={p.content}
      image={p.image}
      tags={p.tags}
      title={p.title}
      url={p.url}
      key={p.title}
    />
  ));

  return (
    <StyledSection id="portfolio" backgroundColor="blackPrimary">
      <animated.div style={fadeInStyle} ref={intersectionRef}>
        <hgroup className="portfolio-open-tag" style={{ margin: "0 auto" }}>
          <h3 className="section__subtitle" style={{ color: whitePrimary }}>
            <span>03.</span>Some Things I've Built
          </h3>
        </hgroup>
      </animated.div>
      {projectList}
      <animated.div style={seeMoreFadeInStyle} ref={seeMoreIntersectionRef}>
        <div
          style={{
            textAlign: "center",
            color: whitePrimary,
            marginBottom: "4rem",
          }}
          className="portfolio-closing-tag"
        >
          <p style={{ marginTop: "5rem" }} className="section__subtitle">
            Want to see more of my projects?
          </p>
          <Link
            href="https://github.com/timeitel/"
            target="_blank"
            style={{
              margin: "1rem auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>Browse</span>
            <ExternalLinkIcon />
          </Link>
        </div>
      </animated.div>
    </StyledSection>
  );
};

const StyledSection = styled(Section)`
  padding-bottom: 2rem;

  .portfolio-closing-tag,
  .portfolio-open-tag {
    position: relative;
  }

  .portfolio-open-tag:before {
    ${(p) => getHtmlTagStyles(p.theme)};
    content: "<Portfolio>";
    top: -2rem;
    left: -0.85rem;
  }

  .portfolio-closing-tag:after {
    ${(p) => getHtmlTagStyles(p.theme)};
    content: "</Portfolio>";
    bottom: -6rem;
    left: -0.85rem;
  }
`;
