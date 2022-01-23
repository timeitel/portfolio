import { Link, LinkedInContainedIcon } from "@components";
import { GithubContainedIcon } from "@components/Icons/GithubContainedIcon";
import styled from "@emotion/styled";
import { FC } from "react";

interface Props {}

export const Aside: FC<Props> = ({}) => {
  return (
    <StyledAside>
      <div
        style={{
          transform: "rotate(-90deg)",
        }}
      >
        <h6>Socials</h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5rem",
          }}
        >
          <Link
            href="https://github.com/timeitel/"
            target="_blank"
            style={{ marginRight: "1rem" }}
          >
            <GithubContainedIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/tim-eitel/" target="_blank">
            <LinkedInContainedIcon />
          </Link>
        </div>
      </div>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  bottom: 0;
  right: 0;
  top: 0;
  position: fixed;
  width: 50px;
  height: 100vh;
  z-index: 1;
  color: red;
  background-color: white;
`;
