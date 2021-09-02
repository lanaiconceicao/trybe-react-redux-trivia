const initialState = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case typeName:
    return { ...state, ...payload };

  default:
    return state;
  }
};
