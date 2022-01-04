import styled from "styled-components";
import { StyledLink } from "../../styles/styles";

export const StyledIntro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 12vh;
  text-align: center;
  line-height: 1;
  font-size: 20vw;
  color: #0f1011;
  font-weight: 700;
`;

export const StyledTitle = styled.div`
  position: relative;
  margin-top: 2.5vh;
  padding: 0 1.25rem;
  text-align: center;
  font-size: 26px;
  color: #fff;
  line-height: 1.2;
`;

export const StyledCta = styled(StyledLink)`
  cursor: pointer;
  color: #fff;
  background: #0069d9;
  padding: 11px 18px;
  font-size: 1rem;
  transition: background 0.25s ease-in 0.15s;
  margin-top: 2.5vh;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 75%);

  &:hover {
    background: #0069d9;
  }
`;

export const StyledSection = styled.section`
  @media only screen and (min-width: 380px) {
    ${StyledIntro} {
      font-size: 82px;
    }

    ${StyledTitle} {
      white-space: nowrap;
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 580px) {
    ${StyledIntro} {
      color: #0f1011;
      font-size: 7.5rem;
      left: 50%;
      top: 50%;
      line-height: 0.9;
      position: absolute;
      margin: 0;
      transform: translate(-50%, -50%);
    }

    ${StyledTitle} {
      font-size: 2.6rem;
      left: 50%;
      position: absolute;
      text-align: center;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    ${StyledCta} {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, 85%);
    }
  }

  @media only screen and (min-width: 980px) {
    ${StyledIntro} {
      font-size: 11.6rem;
    }

    ${StyledTitle} {
      font-size: 3.25rem;
    }
  }
`;
