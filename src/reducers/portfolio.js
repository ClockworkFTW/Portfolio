import { getPortfolio } from "../services/portfolio";
import { sleep } from "../util";

const FETCH_PORTFOLIO_PENDING = "FETCH_PORTFOLIO_PENDING";
const FETCH_PORTFOLIO_SUCCESS = "FETCH_PORTFOLIO_SUCCESS";
const FETCH_PORTFOLIO_FAILURE = "FETCH_PORTFOLIO_FAILURE";

const fetchStatisticsPending = () => ({
  type: FETCH_PORTFOLIO_PENDING,
});

const fetchPortfolioSuccess = (portfolio) => ({
  type: FETCH_PORTFOLIO_SUCCESS,
  payload: { portfolio },
});

const fetchPortfolioFailure = (error) => ({
  type: FETCH_PORTFOLIO_FAILURE,
  payload: { error },
});

export const fetchPortfolio = () => async (dispatch) => {
  dispatch(fetchStatisticsPending());
  try {
    const portfolio = await getPortfolio();
    await sleep(3000);
    dispatch(fetchPortfolioSuccess(portfolio));
  } catch (error) {
    dispatch(fetchPortfolioFailure(error));
  }
};

const INITIAL_STATE = { pending: false, data: null, error: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIO_PENDING:
      return { ...state, pending: true, error: null };
    case FETCH_PORTFOLIO_SUCCESS:
      return { ...state, pending: false, data: action.payload.portfolio };
    case FETCH_PORTFOLIO_FAILURE:
      return { ...state, pending: false, error: action.payload.error };
    default:
      return state;
  }
};
