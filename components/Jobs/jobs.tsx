import styles from "./Jobs.module.scss";
import React, { FC, useState } from "react";
import { Job } from "./job";
import { JobProp } from "../../util/types";

interface Props {
  jobs: JobProp[];
}

export const Jobs: FC<Props> = ({ jobs }) => {
  const [active, setActive] = useState(0);
  const companies = jobs.map((j) => j.data.company);

  const tabs = companies.map((company, i) => {
    return (
      <li
        onClick={() => setActive(i)}
        key={company}
        className={`${styles.tab} ${i === active ? styles.active : ""}`}
      >
        {company}
      </li>
    );
  });

  const jobContent = jobs.map(({ data: job, duties }, i) => {
    return (
      <Job
        title={job.title}
        company={job.company}
        duties={duties}
        time={job.dates}
        key={i}
        active={i === active}
      />
    );
  });

  return (
    <div className={styles.container}>
      <ul className={styles.tablist}>{tabs}</ul>
      {jobContent}
    </div>
  );
};
