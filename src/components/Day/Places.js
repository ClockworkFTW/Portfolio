import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

export default ({ places }) => (
  <Statistic color="#eb3b5a">
    <Emoji symbol="📍" label="round-pushpin" />
    Visited <Bold>{places.length}</Bold> place{places.length > 1 && "s"}
  </Statistic>
);
