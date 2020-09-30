import React, { FC } from 'react';
import styles from '../../../styles/Home.module.scss';
import s from './Portfolio.module.scss';
import Project from '../Project/project';
import { Button } from '../../shared/styles';

const Portfolio: FC<{}> = () => {
  return (
    <section id='portfolio' className={s.wrapper}>
      <hgroup>
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
      <Project image='7aprons.png' />
      <Project image='color-search.png' />
      <Project image='poker-night.png' />
      <div className='text-center'>
        <p>Want to see more projects?</p>
        <Button className='mx-auto mt-4'>Browse Github</Button>
      </div>
    </section>
  );
};

export default Portfolio;
