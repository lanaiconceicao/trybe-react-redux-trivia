import {
  SUCCESS_ACTION,
  FAIL_ACTION,
  GET_DATA,
  SUCCESS_QUESTIONS,
  UPDATE_SCORE,
} from '../actions';

const initialState = {
  name: '',
  assertions: 0,
  score: 0,
  token: '',
  gravatarEmail: '',
  questions: [],
};

export default (state = initialState, { type, payload }) => {
  const { score, assertions } = state;
  switch (type) {
  case SUCCESS_ACTION:
    return { ...state, token: payload };

  case FAIL_ACTION:
    return { ...state, error: payload };

  case GET_DATA:
    return {
      ...state,
      name: payload.name,
      gravatarEmail: payload.gravatarEmail,
    };

  case SUCCESS_QUESTIONS:
    return { ...state, questions: payload };

  case UPDATE_SCORE:
    return { ...state,
      score: score + payload,
      assertions: assertions + 1,
    };

  default:
    return state;
  }
};
