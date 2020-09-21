import { FC } from 'react';
import styles from '../../shared/styles/Home.module.scss';

const Portfolio: FC<{}> = () => {
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
};

export default Portfolio;
