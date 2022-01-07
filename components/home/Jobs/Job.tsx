import { useTheme } from "@emotion/react";
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
  const {
    color: { blue600 },
  } = useTheme();
  if (!active) return null;

  const dutyItems = duties.map((duty) => (
    <li key={duty} className="list-item">
      {duty}
    </li>
  ));

  return (
    <div className="job-description-container">
      <StyledRole>
        <span>{title}</span>
        <span style={{ color: blue600 }}>
          <span style={{ whiteSpace: "nowrap" }}> @ {company}</span>
        </span>
      </StyledRole>
      <StyledJobTime>{time}</StyledJobTime>
      <StyledDutiesList>{dutyItems}</StyledDutiesList>
    </div>
  );
};
