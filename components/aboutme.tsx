import styles from '../styles/About.module.scss';

export default function AboutMe() {
  return (
    <section id={styles.about} className='section__header pb-20 h-screen'>
      <hgroup>
        <h2
          id={styles.title}
          className='font-black section__title text-c-grey-1'
        >
          Tech Stack &
        </h2>
        <h3 className='section__subtitle text-c-dark-1'>
          <span className='text-c-blue mr-4'>01.</span>About Me
        </h3>
      </hgroup>
      <div className={styles.aboutlayout}>
        <div className='w-1/2:md'>
          <p className='mt-4'>
            Hi I'm Tim, a software engineer based in Perth, WA.
          </p>
          <p>
            I enjoy building fast and beautiful apps for the internet, for all
            devices from desktop to mobile.
          </p>
          <p className='mt-2'>
            While at the University of Western Australia and then after
            graduating, I've been working with a team in the RPS Energy segment.
            From here, I get to work on both .NET enterprise and modern
            JavaScript single-page apps. I've been working on data modelling,
            data visualization and data-rich apps with these technologies
            projects.
          </p>
          <p className='mt-2'>
            I'm flexible with what tech I use, but here's what I've been working
            with lately:
          </p>
          <h6 className='mt-2 text-c-blue font-semibold'>Web</h6>
          <ul id={styles.aboutlist} className='list'>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Vue</li>
            <li>HTML & CSS</li>
            <li>C# & .NET</li>
            <li>Dart & Flutter</li>
          </ul>
          <h6 className='mt-2 text-c-blue font-semibold'>Dev</h6>
          <ul id={styles.aboutlist} className='list'>
            <li>Azure / Google Cloud</li>
            <li>DevOps (CI / CD)</li>
            <li>SQL / NoSQL data</li>
            <li>HTTP / REST APIs</li>
          </ul>
        </div>
        <div className={styles.profilepic}></div>
      </div>
    </section>
  );
}
