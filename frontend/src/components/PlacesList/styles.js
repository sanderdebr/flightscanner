import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  box: {
    position: 'absolute',
    left: 0,
    top: '100px',
    backgroundColor: 'white',
    width: 'auto',
    zIndex: 2,
  },
}));

export default useStyles;
