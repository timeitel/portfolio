import React, { FC } from 'react';
import { Button } from '../../shared/components/Button';
import styles from './Project.module.scss';

const project: FC<{}> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <Button>Testing</Button>
      <div>
        <h2>Featured Project</h2>
        <h3>Poker Night</h3>
        <h4></h4>
      </div>
      <img src='' alt='' />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eum
        tempora delectus assumenda dolores officiis iusto quod nostrum, mollitia
        adipisci!
      </div>
      <div>These are the tags</div>
    </div>
  );
};

export default project;
