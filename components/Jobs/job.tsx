import styles from "./Job.module.scss";
import React, { FC } from "react";

interface Props {
  title: string;
  company: string;
  duties: string[];
  time: string;
  active: boolean;
}

export const Job: FC<Props> = ({ active, duties, title, company, time }) => {
  if (!active) return null;

  const dutyItems = duties.map((duty) => (
    <li key={duty} className="list-item">
      {duty}
    </li>
  ));

  return (
    <div className={styles.contentwrapper}>
      <h4 className={styles.role}>
        <span>{title}</span>
        <span className="text-c-blue-1">
          <span className="whitespace-no-wrap"> @ {company}</span>
        </span>
      </h4>
      <h5 className={styles.time}>{time}</h5>
      <ul className={styles.duties}>{dutyItems}</ul>
    </div>
  );
};
