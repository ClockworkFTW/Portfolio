import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

export default ({ todos }) => (
  <Statistic color="#55dd69">
    <Emoji symbol="✅" label="check-mark-button" />
    Completed <Bold>{todos.length}</Bold> action item{todos.length > 1 && "s"}
  </Statistic>
);
