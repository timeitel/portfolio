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
            <p>Hi I'm Tim, a software developer based in Perth, WA.</p>
            <p className='mt-2'>
              I enjoy building fast and beautiful apps for all devices, whether
              updating a legacy project or starting from scratch.
            </p>
            <p className='mt-2'>
              Since graduating from the{' '}
              <span className='text-c-blue-1'>
                University of Western Australia
              </span>
              , I've been working with a team in{' '}
              <span className='text-c-blue-1'>RPS Energy</span>. From here, I
              get to work on a range of projects from .NET and Azure enterprise
              to modern JavaScript apps. These projects apply business logic
              with interactive data modelling, data visualization and animation.
            </p>
            <p className='mt-2'>
              I'm flexible with what tech I use, but here's what I've been
              working with lately:
            </p>
            <h6 className='mt-2 text-c-dark-1 font-semibold'>Web</h6>
            <ul className='list'>
              <li>TypeScript</li>
              <li>React</li>
              <li>Vue</li>
              <li>HTML & (S)CSS</li>
              <li>.NET</li>
              <li>Flutter</li>
            </ul>
            <h6 className='mt-2 text-c-dark-1 font-semibold'>Data</h6>
            <ul className='list'>
              <li>SQL & NoSQL</li>
              <li>Power BI</li>
              <li className={styles.desktop}>REST & GraphQL APIs</li>
              <li className={styles.mobile}>REST & GraphQL</li>
              <li>D3.js</li>
            </ul>
            <h6 className='mt-2 text-c-dark-1 font-semibold'>
              Cloud & Automation
            </h6>
            <ul className='list'>
              <li>Azure & AWS</li>
              <li>DevOps (CI / CD)</li>
              <li>Cloud functions</li>
              <li className={styles.desktop}>Unit & integration testing</li>
              <li className={styles.mobile}>Testing</li>
            </ul>
          </div>
          <div className={styles.imagecontainer}>
            <img src='./static/images/profile-pic.jpg' />
          </div>
        </div>
      </div>
    </section>
  );
}
