import styled from "@emotion/styled";

export const StyledTabList = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-x: auto;

  .tab {
    font-size: 1rem;
    padding: 0px 20px 2px;
    height: 44px;
    border-bottom: ${(p) => `2px solid ${p.theme.color.grey600}`};
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 2px 2px 0 0;

    &:hover {
      background: ${(p) => p.theme.color.blue400};
      color: ${(p) => p.theme.color.blue600};
    }
  }

  .active {
    background: ${(p) => p.theme.color.blue400};
    color: ${(p) => p.theme.color.blue600};
    border-bottom: ${(p) => `2px solid ${p.theme.color.blue600}`};
  }
`;

export const StyledContainer = styled.div`
  border-radius: 2px;
  color: ${(p) => p.theme.color.grey400};
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 640px) {
    flex-direction: row;

    .styled-tablist {
      flex-direction: column;

      .tab {
        border: none;
        border-left: ${(p) => `2px solid ${p.theme.color.grey600}`};
        border-radius: 0 2px 2px 0;
      }

      .active {
        background: ${(p) => p.theme.color.blue400};
        color: ${(p) => p.theme.color.blue600};
        border-left: ${(p) => `2px solid ${p.theme.color.blue600}`};
      }
    }
  }
`;

export const StyledDutiesList = styled.ul`
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
  margin-bottom: 0.2rem;
  line-height: 1.2;
`;

export const StyledJobTime = styled.h5`
  font-style: 1rem;
  font-weight: normal;
  letter-spacing: 0.05em;
  margin-bottom: 28px;
`;
