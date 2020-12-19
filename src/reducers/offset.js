const SET_OFFSET = "SET_OFFSET";

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: { offset },
});

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_OFFSET:
      return action.payload.offset;
    default:
      return state;
  }
};
