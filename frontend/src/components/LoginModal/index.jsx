import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';
import GoogleButton from 'react-google-button';
import { connect } from 'react-redux';
import { API_PATH } from '../../config/api';
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
        <a className={classes.link} href={`${API_PATH}auth/google`}>
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
