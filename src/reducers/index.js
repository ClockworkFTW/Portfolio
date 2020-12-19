import { combineReducers } from "redux";

import portfolioReducer from "./portfolio";
import statisticsReducer from "./statistics";
import calendarRecuder from "./calendar";
import offsetReducer from "./offset";

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
  statistics: statisticsReducer,
  calendar: calendarRecuder,
  offset: offsetReducer,
});

export default rootReducer;
