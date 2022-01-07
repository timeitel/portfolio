import { Link } from "@components";
import styled from "@emotion/styled";

export const StyledIntro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12vh;
  text-align: center;
  line-height: 1;
  font-size: 20vw;
  color: ${(p) => p.theme.color.blackPrimary};
  font-weight: 700;
`;

export const StyledTitle = styled.div`
  position: relative;
  margin-top: 2.5vh;
  padding: 0 1.25rem;
  text-align: center;
  font-size: 26px;
  color: ${(p) => p.theme.color.whitePrimary};
  line-height: 1.2;
`;

export const StyledCta = styled(Link)`
  cursor: pointer;
  color: ${(p) => p.theme.color.whitePrimary};
  background: ${(p) => p.theme.color.blue600};
  padding: 11px 18px;
  font-size: 1rem;
  transition: background 0.25s ease-in 0.15s;
  margin-top: 2.5vh;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 75%);

  &:hover {
    background: ${(p) => p.theme.color.blue600};
  }
`;

export const StyledSection = styled.section`
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
      line-height: 0.9;
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
