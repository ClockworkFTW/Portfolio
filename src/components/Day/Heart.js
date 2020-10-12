import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

const Heart = ({ activities }) => {
  const resting = activities.find(
    (activity) => activity.type === "Resting Heart Rate"
  );
  const walking = activities.find(
    (activity) => activity.type === "Walking Heart Rate Average"
  );
  const variability = activities.find(
    (activity) => activity.type === "Heart Rate Variability"
  );

  const render = resting && walking && variability;

  return render ? (
    <Statistic color="#fc5c65">
      <Emoji symbol="💖" label="sparkling-heart" />
      <Bold>
        {resting.value} - {walking.value}
      </Bold>{" "}
      ({variability.value.toFixed(1)} {variability.unit})
    </Statistic>
  ) : null;
};

export default Heart;
