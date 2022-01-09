import { List } from "@common";
import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  background: ${(p) => p.theme.color.whitePrimary};
  max-width: 1000px;
  margin: 0 auto;

  .about-open-tag,
  .about-closing-tag {
    position: relative;
  }

  .about-open-tag:before {
    content: "<TechStack>";
    font-family: "La Belle Aurore", cursive;
    color: ${(p) => p.theme.color.grey600};
    position: absolute;
    top: -2rem;
    left: -0.85rem;
  }

  .about-closing-tag:after {
    content: "</TechStack>";
    font-family: "La Belle Aurore", cursive;
    color: ${(p) => p.theme.color.grey600};
    position: absolute;
    bottom: -3rem;
    left: -0.85rem;
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
