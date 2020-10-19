import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

const Sleep = ({ activities }) => {
  const sleep = activities.find((activity) => activity.type === "Sleep");

  return sleep ? (
    <Statistic color="#a55eea">
      <Emoji symbol="💤" label="zzz" />
      <Bold>{sleep.duration}</Bold> {sleep.unit}
    </Statistic>
  ) : null;
};

export default Sleep;
