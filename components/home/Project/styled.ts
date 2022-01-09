import styled from "@emotion/styled";

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
  color: ${(p) => p.theme.color.grey400};
  background: ${(p) => p.theme.color.blackSecondary};
  margin-right: 2rem;
  border-radius: 5px;
`;

export const ProjectSubtitle = styled.div`
  font-size: clamp(14px, 5vw, 18px);
  line-height: 1.2;
  margin: 0.5rem 0 1.25rem;
  font-weight: 500;
  margin-bottom: 0;
  color: ${(p) => p.theme.color.blue600};
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

export const StyledProject = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  margin: 100px 0 150px;
  max-width: 1200px;
  margin: 5rem auto;

  img {
    grid-area: 1 / 1 / -1 / 8;
    height: 100%;
    border-radius: 2px;
    object-fit: cover;
    object-position: center;
  }

  .project-content {
    grid-area: 1 / 6 / -1 / -1;
    z-index: 2;
  }

  @media (max-width: 768px) {
    img {
      grid-area: 1 / 1 / -1 / 10;
      opacity: 0.2;
    }

    .project-content {
      grid-area: 1 / 2 / -1 / -1;
    }
  }
`;

export const ProjectTags = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
  font-size: 0.75rem;

  li {
    margin-left: 10px;
    padding: 6px 16px;
    border-radius: 16px;
    background-color: ${(p) => p.theme.color.blackPrimary};
  }
`;

export const ProjectLinks = styled(ProjectTags)`
  margin: 0;

  li {
    margin: 0 1rem;
    background-color: transparent;
    padding: 0;
  }

  svg {
    height: 28px;
    width: 28px;
    color: white;
  }
`;
