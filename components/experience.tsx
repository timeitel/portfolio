import styles from '../styles/Experience.module.scss';

export default function Experience() {
  return (
    <section
      id='experience'
      className='section__header pb-20 h-screen bg-c-dark-1'
    >
      <hgroup>
        <h2
          id={styles.title}
          className='font-black section__title text-c-dark-2'
        >
          Experience
        </h2>
        <h3 className='section__subtitle text-white'>
          <span className='text-c-blue mr-4'>02.</span>Where I've Worked
        </h3>
      </hgroup>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
        natus, odit consequuntur aut incidunt laudantium eos fuga omnis
        repellendus dolorem. Labore nulla in rem quaerat nisi reprehenderit
        delectus, ratione deleniti.
      </p>
    </section>
  );
}
