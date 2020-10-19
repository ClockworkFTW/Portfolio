import React from "react";
import styled from "styled-components";

import Books from "./Books";
import Commits from "./Commits";
import Diet from "./Diet";
import Energy from "./Energy";
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
    <Date>{day.date}</Date>
    <ul>
      {day.activities.length !== 0 && <Heart activities={day.activities} />}
      {day.activities.length !== 0 && <Weight activities={day.activities} />}
      {day.activities.length !== 0 && <Steps activities={day.activities} />}
      {day.activities.length !== 0 && <Energy activities={day.activities} />}
      {day.diet.length !== 0 && <Diet diet={day.diet[0]} />}
      {day.activities.length !== 0 && <Sleep activities={day.activities} />}
      {day.workouts.length !== 0 && <Workouts workouts={day.workouts} />}
      {day.books.length !== 0 && <Books books={day.books} />}
      {day.places.length !== 0 && <Places places={day.places} />}
      {day.commits.length !== 0 && <Commits commits={day.commits} />}
      {day.time.length !== 0 && <Time time={day.time[0]} />}
      {day.todos.length !== 0 && <Todos todos={day.todos} />}
      {day.tracks.length !== 0 && <Tracks tracks={day.tracks} />}
    </ul>
  </Container>
);

const Container = styled.li`
  position: relative;
  min-height: 240px;
  padding: 10px;
  border-right: 1px solid #444444;
  border-bottom: 1px solid #444444;
  background: ${({ isSameMonth }) => !isSameMonth && "#24262c"};
  @media (max-width: 800px) {
    display: ${({ isSameMonth }) => (isSameMonth ? "inherit" : "none")};
  }
`;

const Date = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
`;

export default Day;
