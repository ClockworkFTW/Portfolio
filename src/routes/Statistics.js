import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import styled from "styled-components";

import Day from "../components/Day";

const Statistics = () => {
  const headers = moment.weekdays();

  console.time();

  const statistics = useSelector((state) => {
    // prettier-ignore
    const start = moment().add(state.offset, "month").startOf("month").startOf("week");
    // prettier-ignore
    const end = moment().add(state.offset + 1, "month").startOf("month").endOf("week");

    let day = start;
    let days = [];

    while (day.isSameOrAfter(start) && day.isSameOrBefore(end)) {
      days.push(day.toDate());
      day = day.add(1, "day");
    }

    const { data } = state.statistics;

    days = days.map((day) => {
      const date = moment(day).date();
      // prettier-ignore
      const isSameMonth = moment().add(state.offset, "month").isSame(day, "month")
      let filteredData = { date, isSameMonth };
      for (const key in data) {
        filteredData[key] = data[key].filter((e) =>
          moment(e.date).isSame(moment(day), "day")
        );
      }
      return filteredData;
    });

    return days;
  });

  console.timeEnd();

  return (
    <Container>
      <Header>
        {headers.map((day, i) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </Header>
      <Body>
        {statistics.map((day, i) => (
          <Day key={i} day={day} />
        ))}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 51px);
  background: #1e1f24;
  overflow: scroll;
`;

const Header = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: 1px solid #444444;
  border-left: 1px solid #444444;
  @media (max-width: 800px) {
    display: none;
  }
`;

const WeekDay = styled.li`
  flex: 1;
  padding: 10px;
  border-right: 1px solid #444444;
  border-bottom: 1px solid #444444;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
`;

const Body = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-left: 1px solid #444444;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Statistics;
