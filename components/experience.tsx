import styles from '../styles/Experience.module.scss';
import Jobs from './jobs';

export default function Experience() {
  return (
    <section id='experience' className='h-screen bg-c-dark-1'>
      <div className={styles.container}>
        <hgroup className='mb-16'>
          <h2
            id={styles.title}
            className='font-black section__title text-c-dark-2'
          >
            Experience
          </h2>
          <h3 className='section__subtitle text-white'>
            <span>02.</span>Where I've Worked
          </h3>
        </hgroup>
        <Jobs />
      </div>
    </section>
  );
}
