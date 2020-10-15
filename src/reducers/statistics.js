import { getStatistics } from "../services/statistics";
import { sleep } from "../util";

const FETCH_STATISTICS_PENDING = "FETCH_STATISTICS_PENDING";
const FETCH_STATISTICS_SUCCESS = "FETCH_STATISTICS_SUCCESS";
const FETCH_STATISTICS_FAILURE = "FETCH_STATISTICS_FAILURE";

const fetchStatisticsPending = () => ({
  type: FETCH_STATISTICS_PENDING,
});

const fetchStatisticsSuccess = (statistics) => ({
  type: FETCH_STATISTICS_SUCCESS,
  payload: { statistics },
});

const fetchStatisticsFailure = (error) => ({
  type: FETCH_STATISTICS_FAILURE,
  payload: { error },
});

export const fetchStatistics = () => async (dispatch) => {
  dispatch(fetchStatisticsPending());
  try {
    const statistics = await getStatistics();
    await sleep(3000);
    dispatch(fetchStatisticsSuccess(statistics));
  } catch (error) {
    dispatch(fetchStatisticsFailure(error));
  }
};

const INITIAL_STATE = { pending: false, data: null, error: null };

const statisticsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STATISTICS_PENDING:
      return { ...state, pending: true, error: null };
    case FETCH_STATISTICS_SUCCESS:
      return { ...state, pending: false, data: action.payload.statistics };
    case FETCH_STATISTICS_FAILURE:
      return { ...state, pending: false, error: action.payload.error };
    default:
      return state;
  }
};

export default statisticsReducer;
