import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  loading: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  displayName: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
