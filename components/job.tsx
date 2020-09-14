import styles from '../styles/Job.module.scss';
import { FC } from 'react';

type JobProps = {
  company: string;
  title: string;
  duties: string[];
  time: string;
  isActive: boolean;
};

const Job: FC<JobProps> = ({ title, company, time, duties, isActive }) => {
  const dutyItems = duties.map((duty) => {
    return (
      <li key={duty} className='list-item'>
        {duty}
      </li>
    );
  });

  if (isActive) {
    return (
      <div className={styles.contentwrapper}>
        <h4 className={styles.role}>
          <span>{title}</span>
          <span className='text-c-blue-1'> @ {company}</span>
        </h4>
        <h5 className={styles.time}>{time}</h5>
        <ul className={styles.duties}>{dutyItems}</ul>
      </div>
    );
  }
  return null;
};

export default Job;
