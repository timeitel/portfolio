import { List } from "common/components";
import styled from "@emotion/styled";
import { getHtmlTagStyles } from "common/styles/htmlTags";

export const StyledContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  .about-open-tag,
  .about-closing-tag {
    position: relative;
  }

  .about-open-tag:before {
    ${(p) => getHtmlTagStyles(p.theme)};
    content: "<TechStack>";
    top: -2rem;
  }

  .about-closing-tag:after {
    ${(p) => getHtmlTagStyles(p.theme)};
    content: "</TechStack>";
    bottom: -3rem;
  }

  .desktop {
    display: none;
  }

  @media only screen and (min-width: 980px) {
    .desktop {
      display: block;
    }
  }
`;

export const StyledImageContainer = styled.div`
  margin-left: 80px;

  img {
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    filter: grayscale(80%);
    transition: filter 300ms ease-out;
    border-radius: 4px;

    &:hover {
      filter: grayscale(0);
    }
  }
`;

export const StyledList = styled(List)`
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  @media only screen and (min-width: 640px) {
    .desktop {
      display: block;
    }

    .mobile {
      display: none;
    }
  }
`;
