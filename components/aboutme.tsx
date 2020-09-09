import styles from '../styles/About.module.scss';

export default function AboutMe() {
  return (
    <section id='about' className='bg-white'>
      <div className={styles.container}>
        {' '}
        <hgroup>
          <h2 className='font-black section__title text-c-grey-1'>
            Tech Stack &
          </h2>
          <h3 className='section__subtitle text-c-dark-1'>
            <span>01.</span>About Me
          </h3>
        </hgroup>
        <div className={styles.aboutcontainer}>
          <div className={styles.abouttext}>
            <p>Hi I'm Tim, a software engineer based in Perth, WA.</p>
            <p>
              I enjoy building fast and beautiful apps for all devices, either
              from legacy projects or from scratch.
            </p>
            <p className='mt-2'>
              Since graduating from the{' '}
              <span className='text-c-blue-1'>
                University of Western Australia
              </span>
              , I've been working with a team in{' '}
              <span className='text-c-blue-1'>RPS Energy</span>. From here, I
              get to work on a range of projects from .NET and Azure enterprise
              to modern JavaScript apps. These projects include data-rich
              interaction from modelling to visualization using Power BI and
              JavaScript.
            </p>
            <p className='mt-2'>
              I'm flexible with what tech I use, but here's what I've been
              working with lately:
            </p>
            <h6 className='mt-2 text-c-dark-1 font-semibold'>Web</h6>
            <ul className='list'>
              <li>JavaScript (ES6+ & TS)</li>
              <li>React</li>
              <li>Vue</li>
              <li>HTML & (S)CSS</li>
              <li>C# & .NET</li>
              <li>Dart & Flutter</li>
            </ul>
            <h6 className='mt-2 text-c-dark-1 font-semibold'>Data</h6>
            <ul className='list'>
              <li>SQL & NoSQL</li>
              <li>RESTful & GraphQL APIs</li>
            </ul>
            <h6 className='mt-2 text-c-dark-1 font-semibold'>Cloud</h6>
            <ul className='list'>
              <li>Azure & AWS</li>
              <li>DevOps (CI / CD)</li>
              <li>Cloud functions</li>
            </ul>
          </div>
          {/* <div className={styles.profilepic}></div> */}
          <div className={styles.imagecontainer}>
            <img src='./static/images/profile-pic.jpg' />
          </div>
        </div>
      </div>
    </section>
  );
}
