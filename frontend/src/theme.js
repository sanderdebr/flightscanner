import yellow from '@material-ui/core/colors/yellow';
import pink from '@material-ui/core/colors/pink';
import { createMuiTheme } from '@material-ui/core/styles';

// Theme styling is available in all components

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: pink,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
