import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import GoogleButton from 'react-google-button';
import { connect } from 'react-redux';
import { API_PATH } from '../../config/index';
import { toggleModal } from '../../redux/modal/actions';
import useStyles from '../Header/styles';

const LoginModal = ({
  modalStatus,
  toggleModal: toggleModalAction,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={modalStatus}
      onClose={toggleModalAction}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Login</DialogTitle>
      <DialogContent>
        <a
          className={classes.link}
          href={`${API_PATH}api/auth/google`}
        >
          <GoogleButton />
        </a>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleModalAction} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

LoginModal.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  modalStatus: state.modal.status,
});

export default connect(mapStateToProps, { toggleModal })(LoginModal);
