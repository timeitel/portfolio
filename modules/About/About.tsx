import { Button } from "@components/Button";
import { List } from "@components/List";
import { Section } from "@components/Section";
import { useTheme } from "@emotion/react";
import { useIntersectionFadeIn } from "@hooks";
import React, { Dispatch, FC } from "react";
import { scroller } from "react-scroll";
import { animated, useSpring } from "react-spring";
import { StyledContainer, StyledImageContainer, StyledList } from "./styled";

interface Props {
  setActiveExpTab: Dispatch<React.SetStateAction<number>>;
}

export const About: FC<Props> = ({ setActiveExpTab }) => {
  const {
    color: { grey400, blue600, whitePrimary, blackPrimary },
  } = useTheme();
  const { fadeInStyle, intersectionRef } = useIntersectionFadeIn();
  const [styles, api] = useSpring(() => ({ top: "18%", left: "12%" }));
  const scrollAndSet = (to: string, offset = -100) => {
    scroller.scrollTo(to, { smooth: true, offset });
    setActiveExpTab(0);
  };

  return (
    <animated.div style={fadeInStyle} ref={intersectionRef}>
      <Section
        id="about"
        backgroundColor="grey800"
        style={{ paddingTop: "2rem" }}
      >
        <StyledContainer>
          <hgroup className="about-open-tag">
            <h3 className="section__subtitle" style={{ color: whitePrimary }}>
              About Me
            </h3>
          </hgroup>
          <div
            className="about-closing-tag"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: "550px" }}>
              <p style={{ marginTop: 0 }}>
                Hi, my name's Tim. I'm a software developer based in Melbourne,
                VIC and I enjoy building interesting software for all platforms
                and applications.
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                I'm currently working for{" "}
                <span
                  style={{ color: blue600, cursor: "pointer" }}
                  onClick={() => scrollAndSet("experience")}
                >
                  News Corp{" "}
                </span>
                where I get to work on a range of technologies from React and
                Node to GCP and SQL.
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                I'm flexible with what tech I use, but here's what I've been
                working with lately:
              </p>
              <h6
                style={{
                  color: grey400,
                  margin: "1rem 0 0",
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                Web
              </h6>
              <List className="list">
                <li>HTML & CSS</li>
                <li>.NET & C#</li>
                <li>JavaScript / TypeScript</li>
                <li>React</li>
              </List>
              <h6
                style={{
                  color: grey400,
                  margin: "1rem 0 0",
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                Native (Mobile, Desktop)
              </h6>
              <List className="list">
                <li>Rust</li>
                <li>Bevy</li>
              </List>
              <h6
                style={{
                  color: grey400,
                  fontWeight: 600,
                  margin: "1rem 0 0",
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
                  color: grey400,
                  fontWeight: 600,
                  margin: "1rem 0 0",
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
              <animated.div
                style={{
                  ...styles,
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: blackPrimary,
                  borderRadius: "4px",
                  zIndex: 0,
                }}
              />
              <img
                src="./profile-pic.jpg"
                onMouseEnter={() => api({ left: "15%", top: "20%" })}
                onMouseLeave={() => api({ left: "12%", top: "18%" })}
              />
            </StyledImageContainer>
          </div>
        </StyledContainer>
      </Section>
    </animated.div>
  );
};
