import styles from '../styles/Jobs.module.scss';
import Job from './job';
import { useState } from 'react';

export default function Jobs() {
  const [active, setActive] = useState(0);
  const dutyList: string[] = [
    'Update legacy, enterprise project through requirements gathering and communicating with stakeholders.',
    'Develop internal software for data modelling, visualization and productivity tools.',
    'Communicate in a broad range of settings from liaising with stakeholders and customers to client-facing workshops and site audits on offshore oil rigs.'
  ];
  const companies: string[] = ['RPS', 'Trilogy', 'PwC'];

  const items = companies.map((company, i) => {
    return (
      <li onClick={() => setActive(i)} key={company} className={styles.tab}>
        {company}
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <ul className={styles.tablist}>{items}</ul>
      <Job
        title='Software Engineer & Consultant'
        company='RPS'
        duties={dutyList}
        time='Jan 2020 - Feb 2021'
        id={1}
        isActive={true}
      />
    </div>
  );
}
