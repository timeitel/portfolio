import styles from '../styles/Jobs.module.scss';
import Job from './job';
import { useState } from 'react';

export default function Jobs() {
  const [active, setActive] = useState(0);
  const dutyList: string[] = [
    'Update legacy, enterprise project through requirements gathering and communicating with stakeholders.',
    'Develop internal software for data modelling, visualization and productivity tools.',
    'Communicate in a broad range of settings from liaising with stakeholders and customers to client-facing workshops and site audits.'
  ];
  const companies: string[] = ['RPS', 'PwC', 'Empired', 'GradReady'];

  const items = companies.map((company, i) => {
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

  return (
    <div className={styles.container}>
      <ul className={styles.tablist}>{items}</ul>
      <Job
        title='Software Engineer & Consultant'
        company='RPS'
        duties={dutyList}
        time='Jan 2020 - Feb 2021'
        isActive={0 === active}
      />
      <Job
        title='Intern'
        company='PwC'
        duties={[
          'Perform client-facing audits.',
          'Test internal software.',
          'Give presentations based on data analytics and Power BI visuals.'
        ]}
        time='Nov - Dec 2018'
        isActive={1 === active}
      />
      <Job
        title='IT Support Technician'
        company='Empired'
        duties={[
          'Client support.',
          'Troubleshooting IT issues.',
          'Deliver based on SLAs.'
        ]}
        time='May - Nov 2018'
        isActive={2 === active}
      />
      <Job
        title='Marketing Support'
        company='GradReady'
        duties={[
          'Perform marketing presentations at university lectures.',
          'Survey students on campus.',
          'Identify market interest and promote services and seasonal products face to face.'
        ]}
        time='May - Nov 2018'
        isActive={3 === active}
      />
    </div>
  );
}
