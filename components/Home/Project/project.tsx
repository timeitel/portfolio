import React, { FC } from 'react';
import { HGroup, Figure, FigureCaption } from './styles';
import * as S from '../../shared/styles';

type ProjectProps = {
  image: string;
};

const project: FC<ProjectProps> = ({ image }) => {
  return (
    <Figure>
      <HGroup>
        <S.Title>Featured Project</S.Title>
        <S.Subtitle>Poker Night</S.Subtitle>
        <h4></h4>
      </HGroup>
      <img src={image} alt='' />
      <FigureCaption>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eum
        tempora delectus assumenda dolores officiis iusto quod nostrum, mollitia
        adipisci!
      </FigureCaption>
    </Figure>
  );
};

export default project;
