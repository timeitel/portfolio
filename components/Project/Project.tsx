import React, { FC } from "react";
import { ProjectProp } from "../../util/types";
import * as S from "./styles";

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
    <S.Project>
      <img src={image} alt="Image for Project" />

      <S.ProjectContent>
        <S.HGroup>
          <S.ProjectSubtitle>Featured Project</S.ProjectSubtitle>
          <S.ProjectTitle>{title}</S.ProjectTitle>
        </S.HGroup>
        <S.FigureCaption>{projectDescription}</S.FigureCaption>
        <S.ProjectTags>{tagItems}</S.ProjectTags>
        <S.ProjectLinks>
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
        </S.ProjectLinks>
      </S.ProjectContent>
    </S.Project>
  );
};
