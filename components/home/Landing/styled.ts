import { Link } from "@components";
import styled from "@emotion/styled";

export const StyledIntro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  line-height: 1;
  color: ${(p) => p.theme.color.blackPrimary};
  font-weight: 700;

  h2 {
    font-size: clamp(5rem, 12vw, 10rem);
    margin: 0;
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
`;

export const StyledCta = styled(Link)`
  font-size: 1rem;
  margin-top: 2.5vh;
`;

export const StyledSection = styled.section`
  .styled-intro {
    margin: 12vh auto 2rem;
  }

  @media only screen and (min-width: 380px) {
    .styled-intro {
      font-size: 82px;
    }

    .styled-title {
      white-space: nowrap;
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 580px) {
    .styled-intro {
      color: ${(p) => p.theme.color.blackPrimary};
      font-size: 7.5rem;
      left: 50%;
      top: 50%;
      line-height: 1.2;
      position: absolute;
      margin: 0;
      transform: translate(-50%, -50%);
    }

    .styled-title {
      font-size: 2.6rem;
      left: 50%;
      position: absolute;
      text-align: center;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .styled-cta {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, 85%);
    }
  }

  @media only screen and (min-width: 980px) {
    .styled-intro {
      font-size: 11.6rem;
    }

    .styled-title {
      font-size: 3.25rem;
    }
  }
`;
