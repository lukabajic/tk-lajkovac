import * as actionTypes from "./actionTypes";

import { userSuccess } from "./user";

const scheduleStart = () => ({ type: actionTypes.SCHEDULE_START });

export const scheduleSuccess = (schedule) => ({
  type: actionTypes.SCHEDULE_SUCCESS,
  schedule,
});

const scheduleFail = (error) => ({ type: actionTypes.SCHEDULE_FAIL, error });

export const fetchSchedule = (token) => async (dispatch) => {
  dispatch(scheduleStart());

  const URI = `http://localhost:8000/api/v1/schedule/get`;

  try {
    const res = await fetch(URI, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (!data.error) {
      const { schedule } = data;
      dispatch(scheduleSuccess(schedule));
    } else {
      dispatch(scheduleFail(data.error));
    }
  } catch (err) {
    dispatch(scheduleFail(err.message || err));
  }
};

export const scheduleTime = (token, court, time, day, action = "") => async (
  dispatch
) => {
  dispatch(scheduleStart());

  const URI = `http://localhost:8000/api/v1/schedule/schedule`;

  try {
    const res = await fetch(URI, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        court,
        time,
        day,
        action,
      }),
    });
    const data = await res.json();

    if (!data.error) {
      const { schedule, user } = data;
      dispatch(scheduleSuccess(schedule));
      dispatch(userSuccess(user));
    } else {
      dispatch(scheduleFail(data.error));
    }
  } catch (err) {
    dispatch(scheduleFail(err.message || err));
  }
};
