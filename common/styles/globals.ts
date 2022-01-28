import { css } from "@emotion/react";
import { ITheme } from "@theme";

export const getGlobalStyles = (theme: ITheme) => css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    scroll-behavior: smooth;
    color: ${theme.color.grey600};
    max-width: 100%;
    overflow-x: clip;
    background: ${theme.color.grey800};
    line-height: 1.5;
    scroll-padding-top: 50px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Raleway;
  }

  section {
    padding: 6rem 1.25rem;
    width: 100%;

    .section__title {
      font-size: 3rem;
      line-height: 0.9;
      font-weight: 700;
    }

    .section__subtitle {
      font-size: 2rem;
      line-height: 1.2;
      margin: 0.5rem 0 1.5rem;
      font-weight: 500;

      span {
        color: ${theme.color.blue600};
        margin-right: 1rem;
      }
    }
  }

  .cta {
    text-decoration: none;
    position: relative;

    &:before {
      background: ${theme.color.blue600};
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
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }

  .list {
    columns: 2;

    li::before {
      content: "▹";
      color: ${theme.color.blue600};
      font-size: 18px;
      padding-right: 5px;
    }
  }

  .list-item::before {
    content: "▹";
    color: ${theme.color.blue600};
    font-size: 18px;
    padding-right: 5px;
  }

  @media (min-width: 640px) {
    .section__title {
      font-size: 3.4rem;
    }

    .section__subtitle {
      font-size: 2.25rem;
    }

    section {
      padding: 6rem 2.5rem;
    }
  }

  @media (min-width: 1024px) {
    section {
      padding: 6rem 7.5rem;
    }
  }
`;
