export const SUCCESS_ACTION = 'SUCCESS_ACTION';
export const FAIL_ACTION = 'FAIL_ACTION';
export const GET_DATA = 'GET_DATA';
export const SUCCESS_QUESTIONS = 'SUCCESS_QUESTIONS';
export const UPDATE_SCORE = 'UPDATE_SCORE';
const URL = 'https://opentdb.com/api_token.php?command=request';

function successAction(json) {
  window.localStorage.setItem('token', json.token);
  return { type: SUCCESS_ACTION, payload: json.token };
}

function successQuestions(payload) {
  return { type: SUCCESS_QUESTIONS, payload };
}

export const updateScore = (payload) => (
  { type: UPDATE_SCORE, payload }
);

export const failAction = (error) => ({
  type: FAIL_ACTION,
  payload: error,
});

export const fetchToken = () => async (dispatch) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch(successAction(data));
    const response2 = await fetch(`https://opentdb.com/api.php?amount=5&token=${data.token}`);
    const questions = await response2.json();
    dispatch(successQuestions(questions.results));
  } catch (error) {
    return dispatch(failAction(error.message));
  }
};

export const sendData = (payload) => ({
  type: GET_DATA,
  payload,
});
