import React, { FC } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { List, Section } from "@components";
import {
  StyledContainer,
  StyledImageContainer,
  StyledList,
} from "@components/home/About/styled";

interface Props {}

export const About: FC<Props> = () => {
  const {
    color: { grey200, grey800, blue600 },
  } = useTheme();
  return (
    <Section id="about" backgroundColor="whitePrimary">
      <StyledContainer>
        <hgroup>
          <h2 className="section__title" style={{ color: grey200, margin: 0 }}>
            Tech Stack &
          </h2>
          <h3 className="section__subtitle" style={{ color: grey800 }}>
            <span>01.</span>About Me
          </h3>
        </hgroup>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ maxWidth: "550px" }}>
            <p style={{ marginTop: 0 }}>
              Hi, my name's Tim. I'm a software developer based in Perth, WA and
              I enjoy building fast and interesting software for all devices,
              platforms, and applications.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              I'm currently working for{" "}
              <span style={{ color: blue600 }}>Komo Digital Engagement</span>{" "}
              where I get to work on a range of technologies from full stack
              .NET and React to Node microservices.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              I'm flexible with what tech I use, but here's what I've been
              working with lately:
            </p>
            <h6
              style={{
                color: grey800,
                margin: "0.5rem 0 0",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Web
            </h6>
            <List className="list">
              <li>HTML & CSS</li>
              <li>.NET & C#</li>
              <li>JavaScript & React</li>
              <li>Flutter</li>
            </List>
            <h6
              style={{
                color: grey800,
                fontWeight: 600,
                margin: "0.5rem 0 0",
                fontSize: "1rem",
              }}
            >
              Data
            </h6>
            <StyledList className="list">
              <li>PostgreSQL & NoSQL</li>
              <li className="desktop">RESTful APIs</li>
              <li className="mobile">RESTful APIs</li>
            </StyledList>
            <h6
              style={{
                color: grey800,
                fontWeight: 600,
                margin: "0.5rem 0 0",
                fontSize: "1rem",
              }}
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
    </Section>
  );
};
