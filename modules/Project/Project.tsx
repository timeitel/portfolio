import { CodeIcon, ExternalLinkIcon } from "common/components/Icons";
import { IProject } from "common/types";
import React, { FC } from "react";
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

export const Project: FC<IProject> = ({
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
      <img
        style={{ width: "100%", borderRadius: "4px" }}
        src={image}
        alt="Image for Project"
      />

      <ProjectContent className="project-content">
        <HGroup>
          <ProjectSubtitle>Featured Project</ProjectSubtitle>
          <ProjectTitle>{title}</ProjectTitle>
        </HGroup>

        <FigureCaption>
          {projectDescription}
          <ProjectTags>{tagItems}</ProjectTags>
          <ProjectLinks>
            {!!github && (
              <li>
                <a href={github} target="_blank">
                  <CodeIcon />
                </a>
              </li>
            )}
            {!!url && (
              <li>
                <a href={url} target="_blank">
                  <ExternalLinkIcon />
                </a>
              </li>
            )}
          </ProjectLinks>
        </FigureCaption>
      </ProjectContent>
    </StyledProject>
  );
};
