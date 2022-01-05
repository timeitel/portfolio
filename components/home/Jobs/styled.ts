import styled from "@emotion/styled";

export const StyledTabList = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-x: auto;

  .tab {
    font-size: 1rem;
    padding: 0px 20px 2px;
    height: 44px;
    border-bottom: 2px solid #656a70;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 2px 2px 0 0;

    &:hover {
      background: #0069d919;
      color: #0069d9;
    }
  }

  .active {
    background: #0069d919;
    color: #0069d9;
    border-bottom: 2px solid #0069d9;
  }
`;

export const StyledContainer = styled.div`
  border-radius: 2px;
  color: #99a1a6;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 640px) {
    flex-direction: row;

    .styled-tablist {
      flex-direction: column;

      .tab {
        border: none;
        border-left: 2px solid #656a70;
        border-radius: 0 2px 2px 0;
      }

      .active {
        background: #0069d919;
        color: #0069d9;
        border-left: 2px solid #0069d9;
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
  color: #e3e3e3;
  margin-bottom: 0.2rem;
  line-height: 1.2;
`;

export const StyledJobTime = styled.h5`
  font-style: 1rem;
  font-weight: normal;
  letter-spacing: 0.05em;
  margin-bottom: 28px;
`;
