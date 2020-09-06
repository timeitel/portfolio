import styles from '../styles/About.module.css';

export default function AboutMe() {
  return (
    <section id={styles.about} className='section__header pb-20'>
      <h1 className='font-black section__title'>About Me</h1>
      <div className={styles.aboutlayout}>
        <div className='w-4/6:md'>
          <p className='mt-4'>
            Hi there, I'm Tim. I'm a software engineer based in Perth, WA.
          </p>
          <p>
            I enjoy building fast and beautiful apps for the internet, for all
            devices from desktop to mobile.
          </p>
          <p className='mt-2'>
            During and after graduating from the University of Western
            Australia, I've been working with a team in the RPS Energy segment.
            From here, I get to work on both .NET enterprise and modern
            JavaScript single-page application projects.
          </p>
          <p className='mt-2'>
            Lately, I've been working on data modelling, data visualization and
            data-rich apps with these technologies:
          </p>
          <ul id={styles.aboutlist} className='list mt-2'>
            <li>JavaScript (ES6+)</li>
            <li>HTML & CSS</li>
            <li>React</li>
            <li>Vue</li>
            <li>.NET</li>
            <li>Dart / Flutter</li>
          </ul>{' '}
        </div>
        <div id={styles.profilepic}></div>
      </div>
    </section>
  );
}
