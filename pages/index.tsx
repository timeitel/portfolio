import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Portfolio } from "../components/Portfolio/Portfolio";
import AboutMe from "../components/AboutMe/aboutme";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import React, { FC } from "react";
import { GetStaticProps } from "next";
import { JobProp, ProjectProp } from "../util/types";
import { Experience } from "../components/Experience";
import { Landing } from "../components/Landing/Landing";

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
      <div className={styles.container}>
        <main className={styles.main}>
          <Landing />
          <AboutMe />
          <Experience jobs={jobs} />
          <Portfolio projects={projects} />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const jobFiles = fs.readdirSync(`${process.cwd()}/content/jobs`).reverse();
  const projectFiles = fs
    .readdirSync(`${process.cwd()}/content/projects`)
    .reverse();

  const jobs = jobFiles.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/jobs/${filename}`)
      .toString();

    const { content, data } = matter(markdownWithMetadata);
    const duties = content
      .replace(/(\r\n|\n|\r)/gm, "")
      .split("- ")
      .filter(Boolean);

    return {
      data,
      duties,
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
