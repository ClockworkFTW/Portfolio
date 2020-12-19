import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

export default ({ weight }) => (
  <Statistic color="#ee4488">
    <Emoji symbol="⚖️" label="running-shoe" />
    <Bold>{Number(weight.weight).toFixed(1)}</Bold> lb (
    {Math.round(weight.body_fat_percentage)}%)
  </Statistic>
);
