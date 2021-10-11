import styles from "./Job.module.scss";
import React, { FC } from "react";

interface Props {
  title: string;
  company: string;
  duties: string[];
  time: string;
  active: boolean;
}

export const Job: FC<Props> = (props) => {
  const dutyItems = props.duties.map((duty) => {
    return (
      <li key={duty} className="list-item">
        {duty}
      </li>
    );
  });

  if (props.active) {
    return (
      <div className={styles.contentwrapper}>
        <h4 className={styles.role}>
          <span>{props.title}</span>
          <span className="text-c-blue-1">
            <span className="whitespace-no-wrap"> @ {props.company}</span>
          </span>
        </h4>
        <h5 className={styles.time}>{props.time}</h5>
        <ul className={styles.duties}>{dutyItems}</ul>
      </div>
    );
  }
  return null;
};
