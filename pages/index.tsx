import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  About,
  Contact,
  Experience,
  Footer,
  Landing,
  Navbar,
  Portfolio,
} from "../modules";
import { IJob, IProject } from "common/types";
import ReactModal from "react-modal";

interface Props {
  jobs: IJob[];
  projects: IProject[];
}

const Home: FC<Props> = ({ jobs, projects }) => {
  const [activeExpTab, setActiveExpTab] = useState(0);
  if (typeof document === "undefined") {
    React.useLayoutEffect = React.useEffect;
  }
  useEffect(() => ReactModal.setAppElement("#__next"), []);
  return (
    <>
      <Head>
        <title>Tim Eitel | Software Developer</title>
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@700&family=Raleway&family=La+Belle+Aurore&family=Neonderthaw&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <StyledContainer>
        <StyledMain>
          <Landing />
          <About setActiveExpTab={setActiveExpTab} />
          <Experience
            jobs={jobs}
            activeTab={activeExpTab}
            setActiveTab={setActiveExpTab}
          />
          <Portfolio projects={projects} />
          <Contact />
        </StyledMain>

        <Footer />
      </StyledContainer>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const jobFiles = fs
    .readdirSync(`${process.cwd()}/common/content/jobs`)
    .reverse();
  const projectFiles = fs
    .readdirSync(`${process.cwd()}/common/content/projects`)
    .reverse();

  const jobs: IJob[] = jobFiles.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`common/content/jobs/${filename}`)
      .toString();

    const {
      content,
      data: { company, dates, title },
    } = matter(markdownWithMetadata);
    const duties = content
      .replace(/(\r\n|\n|\r)/gm, "")
      .split("- ")
      .filter(Boolean);

    return {
      duties,
      company,
      dates,
      title,
    };
  });

  const projects = projectFiles.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`common/content/projects/${filename}`)
      .toString();

    const { content, data } = matter(markdownWithMetadata);

    return {
      ...data,
      content,
    };
  });

  return {
    props: {
      jobs,
      projects,
    },
  };
};

const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
