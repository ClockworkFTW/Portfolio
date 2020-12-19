import React from "react";
import moment from "moment";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

export default ({ workouts }) =>
  workouts.map((workout) => {
    let { duration } = workout;
    duration = duration
      .split(":")
      .map((e) => e.slice(0, -1))
      .join(":");
    duration = moment.duration(duration).asMinutes();
    duration = Math.round(duration, 0);
    return (
      <Statistic color="#33b8ff">
        <Emoji symbol="🏋️" label="person-lifting-weights" />
        <Bold>{workout.type}</Bold> ({duration} min)
      </Statistic>
    );
  });
