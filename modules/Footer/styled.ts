import { List } from "@components";
import styled from "@emotion/styled";

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 2rem;
`;

export const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1220px;
  padding: 0 40px 40px;
  display: flex;
  justify-content: space-between;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 5rem 1rem 0;
`;
