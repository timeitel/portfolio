import { List } from "@components";
import styled from "@emotion/styled";

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 3rem;
  line-height: 2rem;

  @media (max-width: 768px) {
    .section-links {
      display: none;
    }
  }
`;

export const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1220px;
  padding: 0 40px 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledName = styled.div`
  max-width: 33.3%;
  margin-right: 200px;
`;
