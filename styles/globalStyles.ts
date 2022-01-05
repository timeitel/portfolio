import { css } from "@emotion/react";

export const globalStyle = css`
  $small: 640px;
  $medium: 768px;
  $large: 1024px;
  $x-large: 1280px;

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    scroll-behavior: smooth;
    color: #656a70;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: #212121;
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
      margin: 0.5rem 0 1.25rem;
      font-weight: 500;

      span {
        color: #0069d9;
        margin-right: 1rem;
      }
    }
  }

  .cta {
    text-decoration: none;
    position: relative;

    &:before {
      background: #0069d9;
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
      color: #0069d9;
      font-size: 18px;
      padding-right: 5px;
    }
  }

  .list-item::before {
    content: "▹";
    color: #0069d9;
    font-size: 18px;
    padding-right: 5px;
  }

  @media only screen and (min-width: $small) {
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

  @media only screen and (min-width: $large) {
    section {
      padding: 6rem 7.5rem;
    }
  }
`;
