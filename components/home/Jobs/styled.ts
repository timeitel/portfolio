import { List } from "@common";
import styled from "@emotion/styled";

export const StyledTabList = styled(List)`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  min-width: 230px;

  .tab {
    font-size: 1rem;
    padding: 0 20px 0;
    height: 44px;
    border-bottom: ${(p) => `2px solid ${p.theme.color.grey600}`};
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 2px 2px 0 0;
    line-height: 1;

    &:hover {
      color: ${(p) => p.theme.color.blue600};
    }
  }

  .active {
    color: ${(p) => p.theme.color.blue600};
    border-bottom-color: ${(p) => p.theme.color.blue600};
  }
`;

export const StyledContainer = styled.div`
  border-radius: 2px;
  color: ${(p) => p.theme.color.grey400};
  display: flex;
  flex-direction: column;

  .styled-tablist {
    padding: 0;
    margin: 1rem 0;
  }

  .job-description-container {
    margin: 0.5rem 0 0 0;
  }

  @media only screen and (min-width: 640px) {
    flex-direction: row;

    .job-description-container {
      margin: 0 auto;
    }

    .styled-tablist {
      flex-direction: column;
      margin: 0 1rem 0 0;

      .tab {
        border: none;
        border-left: ${(p) => `2px solid ${p.theme.color.grey600}`};
        border-radius: 0 2px 2px 0;
      }

      .active {
        border-left: ${(p) => `2px solid ${p.theme.color.blue600}`};
      }
    }
  }
`;

export const StyledDutiesList = styled(List)`
  li {
    position: relative;
    padding-left: 30px;
    max-width: 450px;
    margin-bottom: 10px;
  }

  li::before {
    position: absolute;
    left: 0;
  }
`;

export const StyledRole = styled.h4`
  font-weight: 500;
  font-size: 1.2rem;
  color: ${(p) => p.theme.color.grey200};
  margin: 0 0 0.5rem;
  line-height: 1.2;
`;

export const StyledJobTime = styled.h5`
  letter-spacing: 0.05em;
  margin: 0 0 1rem;
  font-weight: 400;
`;
