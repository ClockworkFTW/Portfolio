import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

export default ({ steps }) => (
  <Statistic color="#ffffff">
    <Emoji symbol="👟" label="running-shoe" />
    <Bold>{steps.steps}</Bold> steps (
    {Number(steps["walking_+_running_distance"]).toFixed(1)} mi)
  </Statistic>
);
