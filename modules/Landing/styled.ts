import styled from "@emotion/styled";

export const StyledIntroBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  line-height: 0.9;
  color: #151618;
  margin: 12vh auto 2rem;
  width: 100%;
  font-size: clamp(2.25rem, 10vw, 7.75rem);
  line-height: 0.9;

  ${(p) => p.theme.breakpoints.only("mobile")} {
    margin: 4rem auto 2rem;
  }

  ${(p) => p.theme.breakpoints.up("tablet")} {
    left: 50%;
    top: 50%;
    position: absolute;
    margin: 0;
    transform: translate(-50%, -50%);
  }
`;

export const StyledTitle = styled.div`
  text-align: center;
  color: ${(p) => p.theme.color.whitePrimary};
  line-height: 1.2;

  h1,
  h4 {
    margin: 0;
    font-size: clamp(2rem, 5vw, 3.25rem);
    font-weight: 400;
  }

  ${(p) => p.theme.breakpoints.up("tablet")} {
    font-size: 2.6rem;
    left: 50%;
    position: absolute;
    text-align: center;
    top: 51%;
    transform: translate(-50%, -50%);
  }
`;
