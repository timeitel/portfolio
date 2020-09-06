import styles from '../assets/styles/About.module.css';

export default function AboutMe() {
  return (
    <section id={styles.about} className='h-screen bg-blue-300 section__header'>
      <div>
        <h1 className='font-black section__title'>About Me</h1>
        <p>Hi there, I'm Tim. I'm a software engineer based in Perth, WA.</p>
        <p>
          I enjoy building fast and beautiful apps for the internet, for all
          devices from desktop to mobile.
        </p>
        <p>
          During and after graduating from the University of Western Australia,
          I've been working with a team in the RPS Energy segment. From here, I
          get to work on both .NET enterprise and modern JavaScript single-page
          application projects.
        </p>
        <p>
          Lately, I've been working on data modelling, data visualization and
          data-rich apps with these technologies:
        </p>
      </div>
      <ul className={styles.list}>
        <li>JavaScript (ES6+)</li>
        <li>HTML & CSS</li>
        <li>React</li>
        <li>Vue</li>
        <li>.NET</li>
        <li>Dart / Flutter</li>
      </ul>
    </section>
  );
}
