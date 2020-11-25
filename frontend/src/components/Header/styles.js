import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  container: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
    marginLeft: '1rem',
  },
}));

export default useStyles;
