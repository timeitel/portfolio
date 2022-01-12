import { IJob } from "common/types";
import React, { FC, useState } from "react";
import { Job } from "./Job";
import { StyledContainer, StyledTabList } from "./styled";

interface Props {
  jobs: IJob[];
}

export const Jobs: FC<Props> = ({ jobs }) => {
  const [active, setActive] = useState(0);
  const companies = jobs.map((j) => j.company);

  return (
    <StyledContainer>
      <StyledTabList className="styled-tablist">
        {companies.map((company, i) => (
          <li
            onClick={() => setActive(i)}
            key={company}
            className={`tab${i === active ? " active" : ""}`}
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
          active={i === active}
        />
      ))}
    </StyledContainer>
  );
};
