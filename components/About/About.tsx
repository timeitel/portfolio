import React, { FC } from "react";
import styles from "./About.module.scss";

export const About: FC<{}> = () => {
  return (
    <section id="about" className="bg-white">
      <div className={styles.container}>
        <hgroup>
          <h2 className="font-black section__title text-c-grey-1">
            Tech Stack &
          </h2>
          <h3 className="section__subtitle text-c-dark-1">
            <span>01.</span>About Me
          </h3>
        </hgroup>
        <div className={styles.aboutcontainer}>
          <div className={styles.abouttext}>
            <p>
              Hi, my name's Tim. I'm a software developer based in Perth, WA and
              I enjoy building fast and interesting software for all devices,
              platforms, and applications.
            </p>
            <p className="mt-2">
              I'm currently working for{" "}
              <span className="text-c-blue-1">Komo Digital Engagement</span>{" "}
              where I get to work on a range of technologies from full stack
              .NET and React to Node microservices.
            </p>
            <p className="mt-2">
              I'm flexible with what tech I use, but here's what I've been
              working with lately:
            </p>
            <h6 className="mt-2 text-c-dark-1 font-semibold">Web</h6>
            <ul className="list">
              <li>HTML & CSS</li>
              <li>.NET & C#</li>
              <li>JavaScript & React</li>
              <li>Flutter</li>
            </ul>
            <h6 className="mt-2 text-c-dark-1 font-semibold">Data</h6>
            <ul className="list">
              <li>PostgreSQL & NoSQL</li>
              <li className={styles.desktop}>RESTful APIs</li>
              <li className={styles.mobile}>RESTful APIs</li>
            </ul>
            <h6 className="mt-2 text-c-dark-1 font-semibold">
              Cloud & Automation
            </h6>
            <ul className="list">
              <li>GCP & Azure</li>
              <li>DevOps (CI / CD)</li>
              <li>Microservices</li>
              <li className={styles.desktop}>Unit & integration testing</li>
              <li className={styles.mobile}>Testing</li>
            </ul>
          </div>
          <div className={styles.imagecontainer}>
            <img src="./profile-pic.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};
