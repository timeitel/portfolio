import styles from '../styles/Landing.module.scss';

export default function Landing() {
  return (
    <section className='h-screen relative'>
      <div className={styles.intro}>
        <h2 className={styles.intro__hi}>Hi there,</h2>
        <h2>I'm</h2>
      </div>
      <div className={styles.title}>
        <h1>Tim Eitel</h1>
        <h4>Software Engineer</h4>
        <a href='#about' className={`${styles.cta} cta`}>
          Find out more
        </a>
      </div>
    </section>
  );
}
