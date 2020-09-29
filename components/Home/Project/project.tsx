import React, { FC } from 'react';
import * as S from './styles';

type ProjectProps = {
  image: string;
};

const project: FC<ProjectProps> = ({ image }) => {
  return (
    <S.Project>
      <img src='7aprons.png' alt='' />

      <S.ProjectContent>
        <S.HGroup>
          <S.ProjectSubtitle>Featured Project</S.ProjectSubtitle>
          <S.ProjectTitle>Poker Night</S.ProjectTitle>
        </S.HGroup>
        <S.FigureCaption>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eum
          tempora delectus assumenda dolores officiis iusto quod nostrum,
          mollitia adipisci!
        </S.FigureCaption>
        <S.ProjectTags>
          <li>Vanilla / Static</li>
          <li>React</li>
          <li>Vue</li>
        </S.ProjectTags>
        <S.ProjectLinks>
          <li>
            <a href='https://github.com/timeitel/7aprons' target='_blank'>
              <svg
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href='https://www.7aprons.com/' target='_blank'>
              <svg
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                ></path>
              </svg>
            </a>
          </li>
        </S.ProjectLinks>
      </S.ProjectContent>
    </S.Project>
  );
};

export default project;
