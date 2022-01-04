import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  company: string;
  duties: string[];
  time: string;
  active: boolean;
}

export const Job: FC<Props> = ({ active, duties, title, company, time }) => {
  if (!active) return null;

  const dutyItems = duties.map((duty) => (
    <li key={duty} className="list-item">
      {duty}
    </li>
  ));

  return (
    <div style={{ paddingTop: "30px" }}>
      <StyledRole>
        <span>{title}</span>
        <span className="text-c-blue-1">
          <span className="whitespace-no-wrap"> @ {company}</span>
        </span>
      </StyledRole>
      <StyledJobTime>{time}</StyledJobTime>
      <StyledDutiesList>{dutyItems}</StyledDutiesList>
    </div>
  );
};

const StyledRole = styled.h4`
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--c-grey-1);
  margin-bottom: 0.2rem;
  line-height: 1.2;
`;

const StyledJobTime = styled.h5`
  font-style: 1rem;
  font-weight: normal;
  letter-spacing: 0.05em;
  margin-bottom: 28px;
`;

const StyledDutiesList = styled.ul`
  li {
    position: relative;
    padding-left: 30px;
    max-width: 450px;
    margin-bottom: 10px;
  }

  li::before {
    position: absolute;
    left: 0;
  }
`;
