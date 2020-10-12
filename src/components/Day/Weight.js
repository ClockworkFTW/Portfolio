import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

const Weight = ({ activities }) => {
  const weight = activities.find((activity) => activity.type === "Weight");
  const bfp = activities.find(
    (activity) => activity.type === "Body Fat Percentage"
  );

  const render = weight && bfp;

  return render ? (
    <Statistic color="#ffffff">
      <Emoji symbol="⚖️" label="running-shoe" />
      <Bold>{weight.value.toFixed(1)}</Bold> {weight.unit} (
      {Math.round(bfp.value)}
      {bfp.unit})
    </Statistic>
  ) : null;
};

export default Weight;
