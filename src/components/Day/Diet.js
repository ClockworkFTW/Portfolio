import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

const Diet = ({ diet }) => (
  <>
    <Statistic color="#FFFFFF">
      <Emoji symbol="🍎" label="red-apple" />
      <Bold>{diet.calories}</Bold> calories in
    </Statistic>
    <Statistic color="#FFFFFF">
      <Emoji symbol="🍚" label="rice-bowl" />
      <Bold>{diet.carbs}</Bold>
      <Emoji symbol="🥑" label="avocado" />
      <Bold>{diet.fat}</Bold>
      <Emoji symbol="🥩" label="cut-of-meat" />
      <Bold>{diet.protein}</Bold>
    </Statistic>
  </>
);

export default Diet;
