import { IJob } from "common/types";
import React, { Dispatch, FC, useState } from "react";
import { Job } from "./Job";
import { StyledContainer, StyledTabList } from "./styled";

interface Props {
  jobs: IJob[];
  activeTab: number;
  setActiveTab: Dispatch<React.SetStateAction<number>>;
}

export const Jobs: FC<Props> = ({ jobs, activeTab, setActiveTab }) => {
  const companies = jobs.map((j) => j.company);

  return (
    <StyledContainer>
      <StyledTabList className="styled-tablist">
        {companies.map((company, i) => (
          <li
            onClick={() => setActiveTab(i)}
            key={company}
            className={`tab${i === activeTab ? " active" : ""}`}
          >
            {company}
          </li>
        ))}
      </StyledTabList>

      {jobs.map(({ duties, company, dates, title }, i) => (
        <Job
          title={title}
          company={company}
          duties={duties}
          time={dates}
          key={i}
          active={i === activeTab}
        />
      ))}
    </StyledContainer>
  );
};
