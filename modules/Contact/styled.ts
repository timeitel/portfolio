import { Link, Section } from "@components";
import styled from "@emotion/styled";
import { getHtmlTagStyles } from "@styles/htmlTags";

export const StyledSection = styled(Section)`
  padding-bottom: 3rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    background-color: ${(p) => p.theme.color.blackPrimary};
    left: 0;
    right: 0;
    top: 0;
    height: 200px;
  }

  .contact-tag,
  .contact-tag {
    position: relative;
  }

  .contact-tag:before {
    ${(p) => getHtmlTagStyles(p.theme, p.theme.color.blackPrimary)};
    content: "<Contact>";
    top: -3rem;
    left: -0.8rem;
    font-size: 1rem;
  }

  .contact-tag:after {
    ${(p) => getHtmlTagStyles(p.theme, p.theme.color.blackPrimary)};
    content: "</Contact>";
    bottom: -17rem;
    left: -0.8rem;
    font-size: 1rem;
    ${(p) => p.theme.breakpoints.between("tablet", "laptop")} {
      bottom: -15rem;
    }
    ${(p) => p.theme.breakpoints.up("laptop")} {
      bottom: -14rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  margin: 3rem 0 0;
  display: flex;
  width: fit-content;
`;

export const StyledContainer = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    background-color: ${(p) => p.theme.color.grey600};
    left: 0;
    right: 0;
    top: 0;
    height: 200px;
    border-radius: 20px;
  }
  padding: 110px 40px;
  border-radius: 20px;
  background-color: ${(p) => p.theme.color.grey600};
  max-width: 800px;
  margin: 0 auto;
`;
