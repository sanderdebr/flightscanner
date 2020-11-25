import yellow from '@material-ui/core/colors/yellow';
import pink from '@material-ui/core/colors/pink';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: pink,
  },
  styledLink: {
    textDecoration: 'none',
  },
});

export default theme;
