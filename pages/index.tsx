import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Portfolio from './portfolio';
import AboutMe from './aboutme';
import Landing from './landing';
import Contact from './contact';
import Footer from './footer';
import Navbar from './navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Tim Eitel | Software Engineer</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
          <Landing />
          <AboutMe />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
