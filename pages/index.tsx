import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import styles from '../shared/styles/Home.module.scss';
import Portfolio from '../components/Portfolio/portfolio';
import AboutMe from '../components/AboutMe/aboutme';
import Landing from '../components/Landing/landing';
import Contact from '../components/Contact/contact';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';
import Experience from '../components/Experience/experience';
import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { JobsProps } from '../util/types';

const Home: FC<JobsProps> = ({ jobs }) => {
  return (
    <>
      <Head>
        <title>Tim Eitel | Software Developer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Landing />
          <AboutMe />
          <Experience jobs={jobs} />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content/jobs`);

  const jobs = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/jobs/${filename}`)
      .toString();

    const { content, data } = matter(markdownWithMetadata);
    const duties = content
      .replace(/(\r\n|\n|\r)/gm, '')
      .split('- ')
      .filter(Boolean);

    return {
      data,
      duties
    };
  });

  return {
    props: {
      jobs
    }
  };
};
