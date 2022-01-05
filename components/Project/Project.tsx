import React, { FC } from "react";
import { ProjectProp } from "../../util/types";
import {
  FigureCaption,
  HGroup,
  ProjectContent,
  ProjectLinks,
  ProjectSubtitle,
  ProjectTags,
  ProjectTitle,
  StyledProject,
} from "./styled";

export const Project: FC<ProjectProp> = ({
  github,
  tags,
  title,
  url,
  image,
  content,
}) => {
  const tagsArray = tags.split(", ");
  const tagItems = tagsArray.map((tag) => {
    return <li key={tag}>{tag}</li>;
  });
  const projectDescription = content.replace(/(\r\n|\n|\r)/gm, "");

  return (
    <StyledProject>
      <img src={image} alt="Image for Project" />

      <ProjectContent className="project-content">
        <HGroup>
          <ProjectSubtitle>Featured Project</ProjectSubtitle>
          <ProjectTitle>{title}</ProjectTitle>
        </HGroup>
        <FigureCaption>{projectDescription}</FigureCaption>
        <ProjectTags>{tagItems}</ProjectTags>
        <ProjectLinks>
          <li>
            <a href={github} target="_blank">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href={url} target="_blank">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </a>
          </li>
        </ProjectLinks>
      </ProjectContent>
    </StyledProject>
  );
};
