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
  max-width: 800px;
  padding: 0 40px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;

  ${(p) => p.theme.breakpoints.only("mobile")} {
    flex-direction: column-reverse;
  }
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  ${(p) => p.theme.breakpoints.only("mobile")} {
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;
  }
`;
