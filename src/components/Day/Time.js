import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

export default ({ time }) => (
  <>
    <Statistic color="#FBBF24">
      <Emoji symbol="⌛" label="hourglass-done" />
      <Bold>{time.total_time}</Bold> screen time
    </Statistic>
    <Statistic color="#FBBF24">
      <Emoji symbol="👍" label="thumbs-up" />
      <Bold>{time.all_productive_time}</Bold>
      <Emoji symbol="👎" label="thumbs-down" />
      <Bold>{time.all_distracting_time}</Bold>
    </Statistic>
  </>
);
