import React from "react";
import styled from "styled-components";

import Diet from "./Diet";
import Places from "./Places";
import Time from "./Time";
import Todos from "./Todos";
import Tracks from "./Tracks";
import Workouts from "./Workouts";

const Day = ({ day }) => (
  <Container isSameMonth={day.isSameMonth}>
    <Date>{day.date}</Date>
    <ul>
      {day.diet.length !== 0 && <Diet diet={day.diet[0]} />}
      {day.places.length !== 0 && <Places places={day.places} />}
      {day.time.length !== 0 && <Time time={day.time[0]} />}
      {day.todos.length !== 0 && <Todos todos={day.todos} />}
      {day.tracks.length !== 0 && <Tracks tracks={day.tracks} />}
      {day.workouts.length !== 0 && <Workouts workouts={day.workouts} />}
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
