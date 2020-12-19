import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

export default ({ commits }) => (
  <Statistic color="#55dd69">
    <Emoji symbol="🐙" label="octopus" />
    <Bold>{commits.length}</Bold> commit{commits.length > 1 && "s"}
  </Statistic>
);
