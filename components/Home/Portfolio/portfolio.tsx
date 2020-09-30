import React, { FC } from 'react';
import styles from '../../../styles/Home.module.scss';
import s from './Portfolio.module.scss';
import Project from '../Project/project';
import { Button } from '../../shared/styles';
import { ProjectsProps } from '../../../util/types';

const Portfolio: FC<ProjectsProps> = ({ projects }) => {
  const projectList = projects.map((p) => {
    return (
      <Project
        github={p.github}
        image={p.image}
        tags={p.tags}
        title={p.title}
        url={p.url}
        key={p.title}
      />
    );
  });

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
      {projectList}
      <div className='text-center'>
        <p>Want to see more projects?</p>
        <Button className='mx-auto mt-4'>Browse Github</Button>
      </div>
    </section>
  );
};

export default Portfolio;
