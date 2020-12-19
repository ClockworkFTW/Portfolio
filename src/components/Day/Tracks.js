import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

export default ({ tracks }) => (
  <Statistic color="#a5b1c2">
    <Emoji symbol="🎧" label="headphone" />
    <Bold>{tracks.length}</Bold> songs played
  </Statistic>
);
