import React, { FC } from "react";
import styles from "./Landing.module.scss";
import * as S from "../../styles/styles";

interface Props {}

export const Landing: FC<Props> = () => {
  return (
    <section className="h-screen relative">
      <div className={styles.intro}>
        <h2 className={styles.intro__hi}>Hi there,</h2>
        <h2>I'm</h2>
      </div>
      <div className={styles.title}>
        <h1>Tim Eitel</h1>
        <h4>Software Developer</h4>
        <S.Link primary className={styles.cta} href="#about">
          Find out more
        </S.Link>
      </div>
    </section>
  );
};
