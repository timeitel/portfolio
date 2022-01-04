import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import styled from "styled-components";
import {
  About,
  Contact,
  Experience,
  Footer,
  Landing,
  Navbar,
  Portfolio,
} from "../components";
import { JobProp, ProjectProp } from "../util/types";

interface Props {
  jobs: JobProp[];
  projects: ProjectProp[];
}

const Home: FC<Props> = ({ jobs, projects }) => {
  return (
    <>
      <Head>
        <title>Tim Eitel | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <StyledContainer>
        <StyledMain>
          <Landing />
          <About />
          <Experience jobs={jobs} />
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
  const jobFiles = fs.readdirSync(`${process.cwd()}/content/jobs`).reverse();
  const projectFiles = fs
    .readdirSync(`${process.cwd()}/content/projects`)
    .reverse();

  const jobs: JobProp[] = jobFiles.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/jobs/${filename}`)
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
      .readFileSync(`content/projects/${filename}`)
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
