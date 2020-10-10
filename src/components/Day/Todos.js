import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

const Todos = ({ todos }) => (
  <Statistic color="#20bf6b">
    <Emoji symbol="✅" label="check-mark-button" />
    Completed <Bold>{todos.length}</Bold> action item{todos.length > 1 && "s"}
  </Statistic>
);

export default Todos;
