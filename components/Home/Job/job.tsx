import styles from './Job.module.scss';
import React, { FC } from 'react';
import { JobProps } from '../../../util/types';

type BodyProps = {
  title: string;
  company: string;
  duties: string[];
  time: string;
  isActive: boolean;
};

const Job: FC<BodyProps> = (props) => {
  const dutyItems = props.duties.map((duty) => {
    return (
      <li key={duty} className='list-item'>
        {duty}
      </li>
    );
  });

  if (props.isActive) {
    return (
      <div className={styles.contentwrapper}>
        <h4 className={styles.role}>
          <span>{props.title}</span>
          <span className='text-c-blue-1'> @ {props.company}</span>
        </h4>
        <h5 className={styles.time}>{props.time}</h5>
        <ul className={styles.duties}>{dutyItems}</ul>
      </div>
    );
  }
  return null;
};

export default Job;
