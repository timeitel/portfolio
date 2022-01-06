import React, { FC } from "react";
import styled from "@emotion/styled";
import { IProject } from "@utils";
import { Project, StyledLink } from "@components";
import { ExternalLinkIcon } from "@components/common/Icons";
import { useTheme } from "@emotion/react";

interface Props {
  projects: IProject[];
}

export const Portfolio: FC<Props> = ({ projects }) => {
  const {
    color,
    color: { blackPrimary, grey800, whitePrimary },
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
    <section id="portfolio" style={{ background: blackPrimary }}>
      <hgroup>
        <StyledTitle className="section__title" style={{ color: grey800 }}>
          Some Things I've Built
        </StyledTitle>
        <h3 className="section__subtitle" style={{ color: whitePrimary }}>
          <span>03.</span>Portfolio
        </h3>
      </hgroup>
      {projectList}
      <div style={{ textAlign: "center" }}>
        <p>Want to see more of my projects?</p>
        <StyledLink
          href="https://github.com/timeitel/"
          target="_blank"
          style={{ margin: "1rem auto" }}
        >
          <span style={{ marginRight: "0.25rem" }}>Browse</span>
          <ExternalLinkIcon />
        </StyledLink>
      </div>
    </section>
  );
};

const StyledTitle = styled.h2`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;
