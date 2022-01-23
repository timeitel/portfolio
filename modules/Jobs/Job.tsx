import { useTheme } from "@emotion/react";
import React, { FC } from "react";
import { animated, useTransition } from "react-spring";
import { StyledDutiesList, StyledJobTime, StyledRole } from "./styled";

interface Props {
  title: string;
  company: string;
  duties: string[];
  time: string;
  active: boolean;
}

export const Job: FC<Props> = ({ active, duties, title, company, time }) => {
  const transitions = useTransition(active, {
    from: { opacity: 0, transform: `translate3d(10px, 10px, 0)` },
    enter: { opacity: 1, transform: `translate3d(0px, 0px, 0)` },
    leave: { opacity: 0, transform: `translate3d(10px, 10px, 0)` },
  });
  const {
    color: { blue600 },
  } = useTheme();
  if (!active) return null;

  const dutyItems = duties.map((duty) => (
    <li key={duty} className="list-item">
      {duty}
    </li>
  ));

  return transitions(
    (styles, show) =>
      show && (
        <animated.div className="job-description-container" style={styles}>
          <StyledRole>
            <span>{title}</span>
            <span style={{ color: blue600 }}>
              <span style={{ whiteSpace: "nowrap" }}> @ {company}</span>
            </span>
          </StyledRole>
          <StyledJobTime>{time}</StyledJobTime>
          <StyledDutiesList>{dutyItems}</StyledDutiesList>
        </animated.div>
      )
  );
};
