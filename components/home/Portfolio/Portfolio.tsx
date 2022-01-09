import { ExternalLinkIcon, Link, Section } from "@common";
import { Project } from "@components";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { getHtmlTagStyles } from "@styles/htmlTags";
import { IProject } from "@utils";
import React, { FC } from "react";

interface Props {
  projects: IProject[];
}

export const Portfolio: FC<Props> = ({ projects }) => {
  const {
    color: { whitePrimary },
  } = useTheme();
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
      <hgroup className="portfolio-open-tag" style={{ margin: "0 auto" }}>
        <h3 className="section__subtitle" style={{ color: whitePrimary }}>
          <span>03.</span>Some Things I've Built
        </h3>
      </hgroup>
      {projectList}
      <div
        style={{ textAlign: "center", color: whitePrimary }}
        className="portfolio-closing-tag"
      >
        <p style={{ marginTop: "7rem" }} className="section__subtitle">
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
    </StyledSection>
  );
};

const StyledSection = styled(Section)`
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
    bottom: -2rem;
    left: -0.85rem;
  }
`;
