import * as actionTypes from "../actions/actionTypes";

const initialState = {
  active: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIDEBAR_TOGGLE:
      return {
        active: !state.active,
      };
    default:
      return state;
  }
};

export default reducer;
