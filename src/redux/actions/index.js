export const SUCCESS_ACTION = 'SUCCESS_ACTION';
export const FAIL_ACTION = 'FAIL_ACTION';
export const GET_DATA = 'GET_DATA';
const URL = 'https://opentdb.com/api_token.php?command=request';

function successAction(json) {
  window.localStorage.setItem('token', json.token);
  return { type: SUCCESS_ACTION, payload: json.token };
}

export const failAction = (error) => ({
  type: FAIL_ACTION,
  payload: error,
});

export const fetchToken = () => async (dispatch) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return dispatch(successAction(data));
  } catch (error) {
    return dispatch(failAction(error.message));
  }
};

export const sendData = (payload) => ({
  type: GET_DATA,
  payload,
});
