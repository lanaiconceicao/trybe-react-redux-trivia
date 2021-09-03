import { SUCCESS_ACTION, FAIL_ACTION, GET_DATA } from '../actions';

const initialState = {
  name: '',
  assertions: 0,
  score: 0,
  token: '',
  gravatarEmail: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case SUCCESS_ACTION:
    return { ...state, token: payload };

  case FAIL_ACTION:
    return { ...state, error: payload };

  case GET_DATA:
    return { ...state, name: payload.name, gravatarEmail: payload.gravatarEmail };

  default:
    return state;
  }
};
