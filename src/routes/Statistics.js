import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import styled from "styled-components";

import Day from "../components/Day";

const Statistics = () => {
  // Set week day headers
  const headers = moment.weekdays();

  // Format statistics data into calendar view
  const statistics = useSelector((state) => {
    const start = moment()
      .add(state.offset, "month")
      .startOf("month")
      .startOf("week");

    const end = moment()
      .add(state.offset + 1, "month")
      .startOf("month")
      .endOf("week");

    let day = start;
    let days = [];

    while (day.isSameOrAfter(start) && day.isSameOrBefore(end)) {
      days.push(day.toDate());
      day = day.add(1, "day");
    }

    const { data } = state.calendar;

    days = days.map((day) => {
      const isSameMonth = moment()
        .add(state.offset, "month")
        .isSame(day, "month");

      const date = moment(day).format("YYYY-MM-DD");
      const num = moment(day).date();

      let mergedData = { date, num, isSameMonth };

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          if (key === moment(day).format("YYYY-MM-DD")) {
            mergedData = { ...mergedData, ...data[key] };
          }
        }
      }

      return mergedData;
    });

    return days;
  });

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
  background: #1e202a;
`;

const Header = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-left: 1px solid #484d66;
  @media (max-width: 800px) {
    display: none;
  }
`;

const WeekDay = styled.li`
  flex: 1;
  padding: 10px;
  border-right: 1px solid #484d66;
  border-bottom: 1px solid #484d66;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
`;

const Body = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-left: 1px solid #484d66;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Statistics;
