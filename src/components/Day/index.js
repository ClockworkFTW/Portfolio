import React from "react";
import moment from "moment";
import styled from "styled-components";

import Books from "./Books";
import Commits from "./Commits";
import Diet from "./Diet";
import Heart from "./Heart";
import Places from "./Places";
import Time from "./Time";
import Todos from "./Todos";
import Tracks from "./Tracks";
import Sleep from "./Sleep";
import Steps from "./Steps";
import Weight from "./Weight";
import Workouts from "./Workouts";

const Day = ({ day }) => (
  <Container isSameMonth={day.isSameMonth}>
    <Date isToday={day.date === moment().format("YYYY-MM-DD")}>{day.num}</Date>
    <ul>
      {day.heart && <Heart heart={day.heart[0]} />}
      {day.weight && <Weight weight={day.weight[0]} />}
      {day.steps && <Steps steps={day.steps[0]} />}
      {day.diet && <Diet diet={day.diet[0]} />}
      {day.sleep && <Sleep sleep={day.sleep[0]} />}
      {day.workout && <Workouts workouts={day.workout} />}
      {day.place && <Places places={day.place} />}
      {day.commit && <Commits commits={day.commit} />}
      {day.time && <Time time={day.time[0]} />}
      {day.todo && <Todos todos={day.todo} />}
      {day.book && <Books books={day.book} />}
      {day.track && <Tracks tracks={day.track} />}
    </ul>
  </Container>
);

const Container = styled.li`
  position: relative;
  min-height: 240px;
  padding: 10px;
  border-right: 1px solid #484d66;
  border-bottom: 1px solid #484d66;
  background: ${({ isSameMonth }) => !isSameMonth && "#262a36"};
  @media (max-width: 800px) {
    display: ${({ isSameMonth }) => (isSameMonth ? "inherit" : "none")};
  }
`;

const Date = styled.span`
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 4px;
  border-radius: 2px;
  font-weight: 700;
  font-size: 12px;
  color: ${({ isToday }) => (isToday ? "#1e202a" : "#ffffff")};
  background: ${({ isToday }) => (isToday ? "#ffffff" : "#1e202a")};
`;

export default Day;
