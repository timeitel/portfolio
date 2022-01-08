import { List } from "@common";
import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  background: white;
  max-width: 1000px;
  margin: 0 auto;

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
