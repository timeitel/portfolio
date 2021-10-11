import React, { FC } from "react";
import styles from "./Experience.module.scss";
import { JobProp } from "../../../util/types";
import { Jobs } from "../Jobs/jobs";

interface Props {
  jobs: JobProp[];
}

export const Experience: FC<Props> = ({ jobs }) => {
  return (
    <section id="experience" className="bg-c-dark-1">
      <div className={styles.container}>
        <hgroup className="mb-16">
          <h2
            id={styles.title}
            className="font-black section__title text-c-dark-2"
          >
            Experience
          </h2>
          <h3 className="section__subtitle text-white">
            <span>02.</span>Where I've Worked
          </h3>
        </hgroup>
        <Jobs jobs={jobs} />
      </div>
    </section>
  );
};
