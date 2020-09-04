import Head from 'next/head';
import styles from '../assets/styles/Home.module.css';
import Portfolio from '../components/portfolio';
import AboutMe from '../components/aboutme';
import Landing from '../components/landing';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Experience from '../components/experience';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tim Eitel | Software Engineer</title>
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
