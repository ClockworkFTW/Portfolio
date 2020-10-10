import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

const Workouts = ({ workouts }) =>
  workouts.map((workout) => (
    <Statistic color="#4b7bec">
      <Emoji symbol="🏋️" label="person-lifting-weights" />
      <Bold>{workout.type}</Bold> ({workout.minutes} min)
    </Statistic>
  ));

export default Workouts;
