import React, { FC } from "react";
import { StyledDutiesList, StyledJobTime, StyledRole } from "./styled";

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
        <span style={{ color: "#0069d9" }}>
          <span className="whitespace-no-wrap"> @ {company}</span>
        </span>
      </StyledRole>
      <StyledJobTime>{time}</StyledJobTime>
      <StyledDutiesList>{dutyItems}</StyledDutiesList>
    </div>
  );
};
