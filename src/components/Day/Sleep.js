import React from "react";
import moment from "moment";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

export default ({ sleep }) => {
  const hours = moment.duration(sleep.duration, "seconds").asHours().toFixed(1);
  return (
    <Statistic color="#b445d5">
      <Emoji symbol="💤" label="zzz" />
      <Bold>{hours}</Bold> hours
    </Statistic>
  );
};
