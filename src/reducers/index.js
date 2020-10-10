import { combineReducers } from "redux";

import statisticsReducer from "./statistics";
import offsetReducer from "./offset";

const rootReducer = combineReducers({
  statistics: statisticsReducer,
  offset: offsetReducer,
});

export default rootReducer;
