import styles from '../assets/styles/Navbar.module.css';

export default function Navbar() {
  const logo = 'Tim { Eitel }';

  return (
    <header className={styles.header}>
      <div>
        <span>{logo}</span>
      </div>
      <nav className='flex'>
        <ul className={styles.nav__ul}>
          <li className={styles.nav__li}>
            <a href='#about'>About</a>
          </li>
          <li className={styles.nav__li}>
            <a href='#experience'>Experience</a>
          </li>
          <li className={styles.nav__li}>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li className={styles.nav__li}>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <a
              href='timeitel-resume.pdf'
              download
              className='btn btn-outline-blue cta'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
