import styled, { css } from 'styled-components';

export const HGroup = styled.hgroup`
  padding: 0 2rem;
`;

export const Figure = styled.figure`
  position: relative;
  margin: 0 auto;
  max-width: 1280px;
  margin-top: 50px;
  text-align: end;

  img {
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
    object-position: center;
  }
`;

export const FigureCaption = styled.figcaption`
  padding: 2rem;
  color: #99a1a6;
  background: #1b1d1f;
  margin-right: 2rem;
  border-radius: 5px;
`;

export const ProjectSubtitle = styled.div`
  font-size: clamp(14px, 5vw, 18px);
  line-height: 1.2;
  margin: 0.5rem 0 1.25rem;
  font-weight: 500;
  margin-bottom: 0;
  color: var(--c-blue-1);
`;

export const ProjectTitle = styled.div`
  font-size: clamp(24px, 5vw, 28px);
  font-weight: 600;
  white-space: nowrap;
  line-height: 1.2;
  margin: 0;
  font-weight: 500;
  color: white;
  margin-bottom: 50px;
`;

export const ProjectContent = styled.div`
  text-align: right;
`;

export const Project = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  margin: 100px 0 150px;

  img {
    grid-area: 1 / 1 / -1 / 8;
    height: 100%;
    border-radius: 2px;
    object-fit: cover;
    object-position: center;
  }

  ${ProjectContent} {
    grid-area: 1 / 6 / -1 / -1;
  }
`;

export const ProjectTags = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;

  li {
    margin-left: 10px;
    padding: 1rem;
    border-radius: 5px;
    font-weight: 600;
  }
`;

export const ProjectLinks = styled(ProjectTags)`
  li {
    margin-left: 25px;
    padding: 8px;
  }

  li:hover {
    background: #1b1d1f;
    border-radius: 50%;
  }

  svg {
    height: 28px;
    width: 28px;
    color: white;
  }
`;
