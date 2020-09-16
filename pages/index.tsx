import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Portfolio from '../components/portfolio';
import AboutMe from '../components/aboutme';
import Landing from '../components/landing';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Experience from '../components/experience';

export default function Home({ jobs }) {
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
          <Experience />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/jobs`);

  const jobs = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/jobs/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    return {
      ...data
    };
  });

  return {
    props: {
      jobs
    }
  };
}
