import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

export default ({ heart }) => (
  <Statistic color="#ee4488">
    <Emoji symbol="💖" label="sparkling-heart" />
    <Bold>{Number(heart.resting_heart_rate).toFixed(1)}</Bold> (
    {Number(heart.heart_rate_variability).toFixed(1)} ms)
  </Statistic>
);
