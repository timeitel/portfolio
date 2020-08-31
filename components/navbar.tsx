import styles from '../styles/Landing.module.css';

export default function Navbar() {
  const logo = 'Tim { Eitel }';

  return (
    <header className={styles.header}>
      <div className='flex items-center'>
        <span>{logo}</span>
      </div>
      <nav className='flex'>
        <a href='/timeitel-resume.pdf' download className='btn btn-blue'>
          Resume
        </a>
      </nav>
    </header>
  );
}
