import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

export default ({ books }) =>
  books.map((book) => (
    <Statistic color="#a5b1c2">
      <Emoji symbol="📖" label="orange-book" />
      <Bold>"{book.title}"</Bold> - {book.author} ({book.cur_percent}%)
    </Statistic>
  ));
