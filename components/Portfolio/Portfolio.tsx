import React, { FC } from "react";
import styled from "styled-components";
import { StyledLink } from "../../styles/styles";
import { ProjectProp } from "../../util/types";
import { Project } from "../Project/Project";

interface Props {
  projects: ProjectProp[];
}

export const Portfolio: FC<Props> = ({ projects }) => {
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
    <section id="portfolio" style={{ background: "#151618" }}>
      <hgroup>
        <StyledTitle
          className="font-black section__title"
          style={{ color: "#424242" }}
        >
          Some Things I've Built
        </StyledTitle>
        <h3 className="section__subtitle text-white">
          <span>03.</span>Portfolio
        </h3>
      </hgroup>
      {projectList}
      <div className="text-center">
        <p>Want to see more of my projects?</p>
        <StyledLink
          href="https://github.com/timeitel/"
          target="_blank"
          className="mx-auto mt-4"
        >
          <span className="mr-1">Browse</span>
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height="22"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
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
