import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const logo = 'Tim { Eitel }';

  return (
    <header className={styles.header}>
      <div>
        <span>{logo}</span>
      </div>
      <nav className='flex'>
        <ul className={styles.nav__ul}>
          <li className='mr-6'>
            <a href='#about'>About</a>
          </li>
          <li className='mr-6'>
            <a href='#experience'>Experience</a>
          </li>
          <li className='mr-6'>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li className='mr-6'>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <a
              href='/timeitel-resume.pdf'
              download
              className='btn btn-outline-blue'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
