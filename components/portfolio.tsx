import styles from '../styles/Home.module.scss';

export default function Portfolio() {
  return (
    <section id='portfolio' className='bg-white h-screen'>
      <hgroup>
        <h2
          id={styles.title}
          className='font-black section__title text-c-grey-1'
        >
          Some Things I've Built
        </h2>
        <h3 className='section__subtitle text-c-dark-1'>
          <span>03.</span>Portfolio
        </h3>
      </hgroup>
    </section>
  );
}
