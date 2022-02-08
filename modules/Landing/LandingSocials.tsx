import { GithubContainedIcon, LinkedInContainedIcon } from "@components/Icons";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";

interface Props {}

export const LandingSocials: FC<Props> = ({}) => {
  const {
    color: { whitePrimary, whiteSecondary },
  } = useTheme();
  return (
    <StyledSocials>
      <StyledLink>
        <LinkedInContainedIcon color={whiteSecondary} />
        <span style={{ color: whitePrimary, margin: "0 0.25rem" }}>--</span>
        <span>LinkedIn</span>
      </StyledLink>
      <StyledLink>
        <GithubContainedIcon color={whiteSecondary} />
        <span style={{ color: whitePrimary, margin: "0 0.25rem" }}>--</span>
        <span>Github</span>
      </StyledLink>
    </StyledSocials>
  );
};

export const StyledSocials = styled.div`
  bottom: 13.25rem;
  left: -2rem;
  padding: 0.75rem 0;
  transform: rotate(-90deg);
  position: absolute;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled.div`
  margin-right: 2.5rem;
  display: flex;
  align-items: center;
`;
