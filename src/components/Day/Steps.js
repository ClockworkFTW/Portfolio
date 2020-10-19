import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

const Steps = ({ activities }) => {
  const steps = activities.find((activity) => activity.type === "Steps");
  const distance = activities.find(
    (activity) => activity.type === "Walking + Running Distance"
  );

  const render = steps && activities;

  return render ? (
    <Statistic color="#ffffff">
      <Emoji symbol="👟" label="running-shoe" />
      <Bold>{steps.value}</Bold> steps ({Number(distance.value).toFixed(1)}{" "}
      {distance.unit})
    </Statistic>
  ) : null;
};

export default Steps;
