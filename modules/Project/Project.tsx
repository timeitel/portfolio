import { useTheme } from "@emotion/react";
import { useIntersectionFadeIn } from "@hooks";
import { CodeIcon, ExternalLinkIcon } from "common/components/Icons";
import { IProject } from "common/types";
import React, { FC } from "react";
import { animated } from "react-spring";
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
  const { fadeInStyle, intersectionRef } = useIntersectionFadeIn();
  const tagsArray = tags.split(", ");
  const tagItems = tagsArray.map((tag) => {
    return <li key={tag}>{tag}</li>;
  });
  const projectDescription = content.replace(/(\r\n|\n|\r)/gm, "");
  const {
    color: { whitePrimary },
  } = useTheme();

  return (
    <animated.div style={fadeInStyle} ref={intersectionRef}>
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
            <p style={{ margin: "0 0 1rem 0" }}>{projectDescription}</p>
            <ProjectTags>{tagItems}</ProjectTags>
            {(!!github || !!url) && (
              <ProjectLinks>
                {!!github && (
                  <li>
                    <a
                      href={github}
                      target="_blank"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <CodeIcon />
                      <span
                        style={{ marginLeft: "0.5rem", color: whitePrimary }}
                      >
                        Code
                      </span>
                    </a>
                  </li>
                )}
                {!!url && (
                  <li>
                    <a
                      href={url}
                      target="_blank"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <ExternalLinkIcon />
                      <span
                        style={{ color: whitePrimary, marginLeft: "0.5rem" }}
                      >
                        Website
                      </span>
                    </a>
                  </li>
                )}
              </ProjectLinks>
            )}
          </FigureCaption>
        </ProjectContent>
      </StyledProject>
    </animated.div>
  );
};
