import * as actionTypes from "./actionTypes";

const authStart = () => ({ type: actionTypes.AUTH_START });

const authSuccess = (token) => ({ type: actionTypes.AUTH_SUCCESS, token });

const authFail = (error) => ({ type: actionTypes.AUTH_FAIL, error });

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.LOGOUT,
  };
};

const setAuthTimeout = (expiresIn) => (dispatch) => {
  setTimeout(() => dispatch(logout()), expiresIn);
};

export const auth = (action, email, password) => async (dispatch) => {
  dispatch(authStart());

  const URI = `http://localhost:8000/api/v1/auth/${action}`;

  try {
    const res = await fetch(URI, {
      method: action === "register" ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (!data.error) {
      const { token, expiresIn } = data;

      const expirationDate = new Date(new Date().getTime() + expiresIn);

      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("expirationDate", JSON.stringify(expirationDate));

      dispatch(authSuccess(token));
      dispatch(setAuthTimeout(expiresIn));
    } else {
      dispatch(authFail(data.error));
    }
  } catch (err) {
    dispatch(authFail(err.message || err));
  }
};

export const authCheckStorage = () => (dispatch) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    dispatch(logout());
  } else {
    const expirationDate = new Date(
      JSON.parse(localStorage.getItem("expirationDate"))
    );

    if (expirationDate > new Date()) {
      dispatch(authSuccess(token));
      setAuthTimeout(expirationDate.getTime() - new Date().getTime());
    } else {
      dispatch(logout());
    }
  }
};
