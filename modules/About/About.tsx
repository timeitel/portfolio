import { useTheme } from "@emotion/react";
import { useIntersectionObserver } from "@hooks";
import { Link, List, Section } from "common/components";
import React, { FC, useRef } from "react";
import { animated, useSpring } from "react-spring";
import { StyledContainer, StyledImageContainer, StyledList } from "./styled";

interface Props {}

export const About: FC<Props> = () => {
  const {
    color: { grey800, blue600 },
  } = useTheme();

  const aboutRef: any = useRef();
  const dataRef = useIntersectionObserver(aboutRef);
  const fadeUpStyle = useSpring({
    opacity: dataRef?.isIntersecting ? 1 : 0,
    transform: dataRef?.isIntersecting
      ? `translate3d(0, ${0}px, 0)`
      : `translate3d(0, ${50}px, 0)`,
  });
  return (
    <Section id="about" backgroundColor="whitePrimary">
      <animated.div style={fadeUpStyle}>
        <StyledContainer>
          <hgroup className="about-open-tag">
            <h3 className="section__subtitle" style={{ color: grey800 }}>
              <span>01.</span>About Me
            </h3>
          </hgroup>
          <div
            ref={aboutRef}
            className="about-closing-tag"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: "550px" }}>
              <p style={{ marginTop: 0 }}>
                Hi, my name's Tim. I'm a software developer based in Perth, WA
                and I enjoy building interesting software for all platforms and
                applications.
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                I'm currently working for{" "}
                <span style={{ color: blue600 }}>
                  <Link href="#experience">Komo Digital Engagement</Link>
                </span>{" "}
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
            <StyledImageContainer className="desktop">
              <img src="./profile-pic.jpg" />
            </StyledImageContainer>
          </div>
        </StyledContainer>
      </animated.div>
    </Section>
  );
};