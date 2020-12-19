import { getCalendar } from "../services/statistics";
import { sleep } from "../util";

const FETCH_CALENDAR_PENDING = "FETCH_CALENDAR_PENDING";
const FETCH_CALENDAR_SUCCESS = "FETCH_CALENDAR_SUCCESS";
const FETCH_CALENDAR_FAILURE = "FETCH_CALENDAR_FAILURE";

const fetchCalendarPending = () => ({
  type: FETCH_CALENDAR_PENDING,
});

const fetchCalendarSuccess = (calendar) => ({
  type: FETCH_CALENDAR_SUCCESS,
  payload: { calendar },
});

const fetchCalendarFailure = (error) => ({
  type: FETCH_CALENDAR_FAILURE,
  payload: { error },
});

export const fetchCalendar = () => async (dispatch) => {
  dispatch(fetchCalendarPending());
  try {
    const calendar = await getCalendar();
    await sleep(3000);
    dispatch(fetchCalendarSuccess(calendar));
  } catch (error) {
    dispatch(fetchCalendarFailure(error));
  }
};

const INITIAL_STATE = { pending: false, data: null, error: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CALENDAR_PENDING:
      return { ...state, pending: true, error: null };
    case FETCH_CALENDAR_SUCCESS:
      return { ...state, pending: false, data: action.payload.calendar };
    case FETCH_CALENDAR_FAILURE:
      return { ...state, pending: false, error: action.payload.error };
    default:
      return state;
  }
};
