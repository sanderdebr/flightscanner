import modalActionTypes from './types';

const { TOGGLE_MODAL } = modalActionTypes;

export const toggleModal = () => (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL,
  });
};

export default toggleModal;
