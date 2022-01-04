import React, { FC, useState } from "react";
import { JobProp } from "../../util/types";
import { Job } from "./Job";
import { StyledContainer, StyledTabList } from "./styled";

interface Props {
  jobs: JobProp[];
}

export const Jobs: FC<Props> = ({ jobs }) => {
  const [active, setActive] = useState(0);
  const companies = jobs.map((j) => j.company);

  return (
    <StyledContainer>
      <StyledTabList>
        {companies.map((company, i) => (
          <li
            onClick={() => setActive(i)}
            key={company}
            className={`tab ${i === active && "active"}`}
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
