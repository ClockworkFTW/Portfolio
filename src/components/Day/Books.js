import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

const Books = ({ books }) =>
  books.map((book) => (
    <Statistic color="#fa8231">
      <Emoji symbol="📙" label="orange-book" />
      <Bold>"{book.title}"</Bold> - {book.author} ({book.cur_percent}%)
    </Statistic>
  ));

export default Books;
