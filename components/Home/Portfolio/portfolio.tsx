import React, { FC } from 'react';
import styles from '../../../styles/Home.module.scss';
import s from './Portfolio.module.scss';
import Project from '../Project/project';

const Portfolio: FC<{}> = () => {
  return (
    <section id='portfolio' className={s.wrapper}>
      <hgroup className='mb-16'>
        <h2
          id={styles.title}
          className='font-black section__title text-c-dark-2'
        >
          Some Things I've Built
        </h2>
        <h3 className='section__subtitle text-white'>
          <span>03.</span>Portfolio
        </h3>
      </hgroup>
      <Project />
    </section>
  );
};

export default Portfolio;
