import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  alert: {
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    justifyContent: 'center',
  },
}));

export default useStyles;
