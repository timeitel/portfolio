import React, { FC } from "react";
import * as S from "../../shared/styles";
import styles from "./Navbar.module.scss";

const Navbar: FC<{}> = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        Tim Eitel
      </a>
      <nav className="flex">
        <ul className={styles.nav__ul}>
          <li className={styles.nav__li}>
            <a href="#about">About</a>
          </li>
          <li className={styles.nav__li}>
            <a href="#experience">Experience</a>
          </li>
          <li className={styles.nav__li}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className={styles.nav__li}>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <S.Link className="flex" target="_blank" href="resume.pdf">
              Resume
              <svg
                className="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </S.Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
