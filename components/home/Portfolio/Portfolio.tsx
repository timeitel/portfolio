import { ExternalLinkIcon, Link, Project, Section } from "@components";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { IProject } from "@utils";
import React, { FC } from "react";

interface Props {
  projects: IProject[];
}

export const Portfolio: FC<Props> = ({ projects }) => {
  const {
    color: { grey800, whitePrimary },
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
    <Section id="portfolio" backgroundColor="blackPrimary">
      <hgroup style={{ margin: "0 auto" }}>
        <StyledTitle
          className="section__title"
          style={{ color: grey800, textAlign: "left" }}
        >
          Some Things I've Built
        </StyledTitle>
        <h3 className="section__subtitle" style={{ color: whitePrimary }}>
          <span>03.</span>Portfolio
        </h3>
      </hgroup>
      {projectList}
      <div style={{ textAlign: "center", color: whitePrimary }}>
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
    </Section>
  );
};

const StyledTitle = styled.h2`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;
