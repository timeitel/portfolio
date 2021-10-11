import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Portfolio from "../components/Home/Portfolio/portfolio";
import AboutMe from "../components/Home/AboutMe/aboutme";
import Landing from "../components/Home/Landing/landing";
import Contact from "../components/Home/Contact/contact";
import Footer from "../components/Home/Footer/footer";
import Navbar from "../components/Home/Navbar/navbar";
import React, { FC } from "react";
import { GetStaticProps } from "next";
import { JobProp, ProjectProp } from "../util/types";
import { Experience } from "../components/Home/Experience/experience";

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
  const projectFiles = fs.readdirSync(`${process.cwd()}/content/projects`);

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
