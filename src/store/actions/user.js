import * as actionTypes from "./actionTypes";

const userStart = () => ({ type: actionTypes.USER_START });

export const userSuccess = (user) => ({ type: actionTypes.USER_SUCCESS, user });

const userFail = (error) => ({ type: actionTypes.USER_FAIL, error });

export const fetchCurUser = (token) => async (dispatch) => {
  dispatch(userStart());

  const URI = `http://localhost:8000/api/v1/user/get`;

  try {
    const res = await fetch(URI, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    const { user } = data;

    dispatch(userSuccess(user));
  } catch (err) {
    dispatch(userFail(err.message || err));
  }
};
