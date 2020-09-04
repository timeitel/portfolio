import styles from '../assets/styles/Navbar.module.css';

export default function Navbar() {
  const logo = 'Tim { Eitel }';

  return (
    <header className={styles.header}>
      <a href='/'>{logo}</a>
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
          <li>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='menu-alt4 w-6 h-6'
            >
              <path
                fill-rule='evenodd'
                d='M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  );
}
