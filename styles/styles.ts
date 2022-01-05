import { css } from "@emotion/css";
import styled from "@emotion/styled";

const blue = "#0069d9";
const lightBlue = "rgba(0, 105, 217, 0.2)";
const ButtonStyles = css`
  padding: 0.5rem 1rem;
  border-radius: 2px;
  display: flex;
  position: relative;
  transition: background 0.25s ease-in 0.15s;

  &:before {
    background: ${blue};
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.35s cubic-bezier(1, 0.25, 0, 0.75) 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const Button = styled.button`
  ${ButtonStyles}
`;

export const StyledLink = styled.a`
  ${ButtonStyles}
  display: inline-flex;
`;

export const Title = styled.h2`
  font-size: 3rem;
  line-height: 0.9;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const Subtitle = styled.h3`
  font-size: 2rem;
  line-height: 1.2;
  margin: 0.5rem 0 1.25rem;
  font-weight: 500;
`;

// old button styles
//   background: ${(props) => (props.primary ? "black" : "transparent")};
//   border: ${(props) => (props.primary ? "none" : `1px solid ${blue}`)};
//   color: ${(props) => (props.primary ? "white" : `${blue}`)};

//   &:hover {
//     background: ${(props) => (props.primary ? `${blue}` : `${lightBlue}`)};
//   }
