import modalActionTypes from './types';

const { TOGGLE_MODAL } = modalActionTypes;

const INITIAL_STATE = { status: false };

const modalReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_MODAL:
      return { ...state, status: !state.status };
    default:
      return state;
  }
};

export default modalReducer;
