import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  users: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        error: null,
        loading: false,
      };
    case actionTypes.UPDATE_USER:
      const updatedUsers =
        state.users &&
        state.users.map((user) => {
          if (user.userId === action.user.userId) {
            return action.user;
          } else {
            return user;
          }
        });
      return {
        ...state,
        users: updatedUsers,
        error: null,
        loading: false,
      };
    case actionTypes.ALL_USER_SUCCESS:
      return {
        ...state,
        users: action.users,
        error: null,
        loading: false,
      };
    case actionTypes.USER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
