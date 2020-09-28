import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Portfolio from '../components/Home/Portfolio/portfolio';
import AboutMe from '../components/Home/AboutMe/aboutme';
import Landing from '../components/Home/Landing/landing';
import Contact from '../components/Home/Contact/contact';
import Footer from '../components/Home/Footer/footer';
import Navbar from '../components/Home/Navbar/navbar';
import Experience from '../components/Home/Experience/experience';
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
