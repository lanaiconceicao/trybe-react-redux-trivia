import { SUCCESS_ACTION, FAIL_ACTION } from '../actions';

const initialState = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    token: '',
    gravatarEmail: '',
  }, 
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case SUCCESS_ACTION:
    return { ...state, token: payload };

  case FAIL_ACTION:
    return { ...state, error: payload };

  default:
    return state;
  }
};
