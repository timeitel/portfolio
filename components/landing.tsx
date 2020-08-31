import styles from '../styles/Landing.module.css';

export default function Landing() {
  return (
    <section className={styles.masthead}>
      <div className={styles.masthead__group}>
        <h2 className='whitespace-no-wrap'>Hi there,</h2>
        <h2>I'm</h2>
      </div>
      <div className={styles.title}>
        <h1>Tim Eitel</h1>
        <h4>Software Engineer</h4>
      </div>
    </section>
  );
}
