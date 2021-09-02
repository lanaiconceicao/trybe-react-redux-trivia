const LOADING_ACTION = 'LOADING_ACTION';
const SUCCESS_ACTION = 'SUCCESS_ACTION';
const FAIL_ACTION = 'FAIL_ACTION';

export const loadingAction = (payload) => ({
  type: LOADING_ACTION,
  payload,
});

export const successAction = (payload) => ({
  type: SUCCESS_ACTION,
  payload,
});

export const failAction = (payload) => ({
  type: FAIL_ACTION,
  payload,
});
