import React, { FC } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

interface Props {}

export const About: FC<Props> = () => {
  const {
    color: { whitePrimary, grey400: grey100, grey400, blue600: blue300 },
  } = useTheme();
  return (
    <section id="about" style={{ background: whitePrimary }}>
      <StyledContainer>
        <hgroup>
          <h2 className="section__title" style={{ color: grey100 }}>
            Tech Stack &
          </h2>
          <h3 className="section__subtitle" style={{ color: grey400 }}>
            <span>01.</span>About Me
          </h3>
        </hgroup>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ maxWidth: "550px" }}>
            <p>
              Hi, my name's Tim. I'm a software developer based in Perth, WA and
              I enjoy building fast and interesting software for all devices,
              platforms, and applications.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              I'm currently working for{" "}
              <span style={{ color: blue300 }}>Komo Digital Engagement</span>{" "}
              where I get to work on a range of technologies from full stack
              .NET and React to Node microservices.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              I'm flexible with what tech I use, but here's what I've been
              working with lately:
            </p>
            <h6
              style={{
                color: grey400,
                marginTop: "0.5rem",
                fontWeight: 600,
              }}
            >
              Web
            </h6>
            <ul className="list">
              <li>HTML & CSS</li>
              <li>.NET & C#</li>
              <li>JavaScript & React</li>
              <li>Flutter</li>
            </ul>
            <h6
              style={{ color: grey400, fontWeight: 600, marginTop: "0.5rem" }}
            >
              Data
            </h6>
            <StyledList className="list">
              <li>PostgreSQL & NoSQL</li>
              <li className="desktop">RESTful APIs</li>
              <li className="mobile">RESTful APIs</li>
            </StyledList>
            <h6
              style={{ color: grey400, fontWeight: 600, marginTop: "0.5rem" }}
            >
              Cloud & Automation
            </h6>
            <StyledList className="list">
              <li>GCP & Azure</li>
              <li>DevOps (CI / CD)</li>
              <li>Microservices</li>
              <li className="desktop">Unit & integration testing</li>
              <li className="mobile">Testing</li>
            </StyledList>
          </div>
          <StyledImageContainer>
            <img src="./profile-pic.jpg" />
          </StyledImageContainer>
        </div>
      </StyledContainer>
    </section>
  );
};

const StyledContainer = styled.div`
  background: white;
  max-width: 1000px;
  margin: 0 auto;
`;

const StyledImageContainer = styled.div`
  display: none;
  margin-left: 60px;
  width: 40%;
  max-width: 300px;

  img {
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    filter: grayscale(80%);
    transition: filter 300ms ease-out;

    &:hover {
      filter: grayscale(0);
    }
  }
`;

const StyledList = styled.ul`
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
