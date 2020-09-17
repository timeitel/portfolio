import styles from '../styles/Jobs.module.scss';
import Job from './job';
import { useState } from 'react';

export default function Jobs({ jobs }) {
  const [active, setActive] = useState(0);

  const companies: string[] = jobs.map((j) => j.data.company);

  const tabs = companies.map((company, i) => {
    return (
      <li
        onClick={() => setActive(i)}
        key={company}
        className={`${styles.tab} ${i === active ? styles.active : ''}`}
      >
        {company}
      </li>
    );
  });

  const jobList = jobs.map(({ data: job, duties }, i) => {
    return (
      <Job
        title={job.title}
        company={job.company}
        duties={duties}
        time={job.dates}
        key={i}
        isActive={i === active}
      />
    );
  });

  return (
    <div className={styles.container}>
      <ul className={styles.tablist}>{tabs}</ul>
      {jobList}
    </div>
  );
}
