import React from "react";

import { Statistic, Bold } from "../Common";
import Emoji from "../Emoji";

export default ({ diet }) => {
  const caloriesOut = Math.round(
    Number(diet.resting_calories) + Number(diet.active_calories)
  );
  const caffeine = Math.round(diet.caffeine / 90, 0);
  return (
    <>
      <Statistic color="#FFFFFF">
        <Emoji symbol="🍎" label="red-apple" />
        <Bold>{diet.dietary_calories}</Bold> calories in
      </Statistic>
      <Statistic color="#FFFFFF">
        <Emoji symbol="🔥" label="fire" />
        <Bold>{caloriesOut}</Bold> calories out
      </Statistic>
      <Statistic color="#FFFFFF">
        <Emoji symbol="🍚" label="rice-bowl" />
        <Bold>{diet.carbohydrates}</Bold>
        <Emoji symbol="🥑" label="avocado" />
        <Bold>{diet.total_fat}</Bold>
        <Emoji symbol="🥩" label="cut-of-meat" />
        <Bold>{diet.protein}</Bold>
      </Statistic>
      {caffeine !== 0 && (
        <Statistic color="#b79d7b">
          <Emoji symbol="☕" label="hot-beverage" />
          <Bold>{caffeine}</Bold> cup{caffeine > 1 ? "s" : ""}
        </Statistic>
      )}
    </>
  );
};
