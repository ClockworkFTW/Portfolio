import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

const Commits = ({ commits }) => (
  <Statistic color="#0fb9b1">
    <Emoji symbol="💻" label="laptop" />
    <Bold>{commits.length}</Bold> commit{commits.length > 1 && "s"}
  </Statistic>
);

export default Commits;
