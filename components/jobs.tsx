import styles from '../styles/Jobs.module.scss';

export default function Jobs() {
  return (
    <div className={styles.container}>
      <ul className={styles.tablist}>
        <li className={`${styles.tab} ${styles.active}`}>RPS</li>
        <li className={styles.tab}>Trilogy</li>
        <li className={styles.tab}>PwC</li>
      </ul>
      <div className={styles.content}>
        <h4 className={styles.role}>
          <span>Graduate Software Engineer & Consultant</span>
          <span className='text-c-blue-1'> @ RPS</span>
        </h4>
        <h5 className={styles.time}>February 2019 - Present</h5>
        <ul className={styles.duties}>
          <li className='list-item'>
            Update legacy, enterprise project through requirements gathering and
            communicating with stakeholders.
          </li>
          <li className='list-item'>
            Develop internal software for data modelling, visualization and
            productivity tools.
          </li>
          <li className='list-item'>
            Communicate in a broad range of settings from liaising with
            stakeholders and customers to client-facing workshops and site
            audits on offshore oil rigs.
          </li>
        </ul>
      </div>
    </div>
  );
}
