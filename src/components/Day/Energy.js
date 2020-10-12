import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

const Energy = ({ activities }) => {
  const active = activities.find(
    (activity) => activity.type === "Active Calories"
  );
  const resting = activities.find(
    (activity) => activity.type === "Resting Calories"
  );

  const render = active && resting;

  return render ? (
    <Statistic color="#ffffff">
      <Emoji symbol="🔥" label="fire" />
      <Bold>{Math.round(active.value + resting.value)}</Bold> calories out
    </Statistic>
  ) : null;
};

export default Energy;
